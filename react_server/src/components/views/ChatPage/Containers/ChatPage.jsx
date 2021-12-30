import React, { useState } from 'react';
import { Typography, Button, Input } from 'antd';
import io from 'socket.io-client';
import Chat from './Chat';
import { QuestionCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { v1 } from 'uuid';

import 'antd/dist/antd.css';
import '../ChatPageStyles.css';

const socket = io.connect('http://192.168.45.41:8000');

// http://www.ftclone.com/socket
// http://3.37.1.151:5000/
// http://www.ftclone.com:5000
// http://192.168.45.41:5000

export const ChatPage = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const { Text, Link, Title } = Typography;

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  const handleEnterCSRoom = () => {
    console.log(v1());
    setUsername('csUser');
    setRoom(`CS-room-${v1()}`);
    socket.emit('join_room', room);
    setShowChat(true);
  };

  return (
    <>
      {!showChat ? (
        <joinChatContainer className='joinChatContainer'>
          {/* <h3>Live Chat</h3> */}
          <Title level={3}>Live Chat</Title>
          <Input
            type='text'
            placeholder='username'
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            type='text'
            placeholder='room name'
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <Button
            type='primary'
            icon={<QuestionCircleOutlined />}
            onClick={() => handleEnterCSRoom()}
            disabled
          >
            Send A Question
          </Button>
          <Button onClick={joinRoom}>Join A Room</Button>
        </joinChatContainer>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </>
  );
};

const joinChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const joinChatInput = styled.input`
  width: 210px;
  height: 40px;
  margin: 7px;
  border: 2px solid #43a047;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

export default ChatPage;
