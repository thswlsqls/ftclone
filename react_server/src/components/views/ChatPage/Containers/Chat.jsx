import React, { useEffect, useState, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';

import { Typography, Button, Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { uploadFile } from '../../../../apis/upload';

import Axios from 'axios';

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  const scrollRef = useRef();

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
        fileList: [],
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
      window.scrollTo(0, document.querySelector('.chat-window').scrollHeight);
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const [fileListArr, setFileListArr] = useState([]);

  const handleInputFileChange = async (e) => {
    // TEST;
    // var resultList = await new Promise((resolve, reject) => {
    //   const fileList = e.target.files;
    //   for (let i = 0; i < fileList.length; i++) {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[i]);
    //     reader.onloadend = () => {
    //       const newFile = {
    //         file: e.target.files[i],
    //         preview: reader.result,
    //       };
    //       setFileListArr((prevList) => [...prevList, newFile]);
    //     };
    //     // console.log(fileListArr);
    //   }
    //   resolve(fileListArr);
    // });

    // console.log(resultList);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const result = await Axios.post('/api/socket/upload', formData);
    console.log(result.data);

    Axios.post('/api/socket/test', { test: 'testMessage' }).then((req, res) => {
      console.log(res);
    });

    // console.log('testS');
    // const fileList = e.target.files;
    // console.log(Array(fileList));
    // const promistList = resultList.map((file) => uploadFile(file));
  };

  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>{room}</p>
      </div>
      <div className='chat-body'>
        <ScrollToBottom className='message-container'>
          {messageList.map((messageContent) => {
            return (
              <div
                className='message'
                id={username === messageContent.author ? 'you' : 'other'}
              >
                <div>
                  <div className='message-content'>
                    <p>{messageContent.message}</p>
                  </div>
                  <div className='message-meta'>
                    <p id='time'>{messageContent.time}</p>
                    <p id='author'>{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className='chat-footer'>
        {/* <InputFileLabel className='input-file-button' for='input-file'>
          <PlusSquareOutlined />
        </InputFileLabel>
        <InputFile
          id='input-file'
          type='file'
          accept='image/*, video/*, audio/*'
          onChange={handleInputFileChange}
          multiple
        ></InputFile> */}
        <Input
          type='text'
          value={currentMessage}
          placeholder='Enter your Message...'
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === 'Enter' && sendMessage();
          }}
        />
        <Button onClick={sendMessage}>
          {/* &#9658; */}
          Send
        </Button>
      </div>
    </div>
  );
}

const InputFile = styled.input`
  display: none;
`;

const InputFileLabel = styled.label`
  background-color: #fff;
  opacity: 1;
  margin: 0;
  padding: 0;
  width: 20%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1rem;
  cursor: pointer;
  font-size: 20px;
  color: #bfc5d6;
`;

export default Chat;
