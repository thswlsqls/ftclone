import {
  MessageFilled,
  PictureFilled,
  SmileOutlined,
  VideoCameraFilled,
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import Form from 'antd/lib/form/Form';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, ReactReduxContext } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Axios from 'axios';
import { Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import Dropzone from 'react-dropzone';
import {
  expressServerIP,
  expressServerAddress,
  expressServerPort,
} from '../../../../Config';

import '../Sections/uploadStyles.css';
import { json } from 'body-parser';

// const { Option } = Select;

// const PrivateOptions = [
//     {value: 0, label: "Private"},
//     {value: 1,  label: "Public"}
// ]

// const CategoryOptions = [
//     {value: "Film & Animation", label: "Film & Animation"},
//     {value: "Auto & Vehicles", label: "Auto & Vehicles"},
//     {value: "Music", label: "Music"},
//     {value: "Pets & Animals", label: "Pets & Animals"},
// ]

function Upload(props) {
  const [ModalOpen, setModalOpen] = useState(false);
  const [isUploadSingleFile, setisUploadSingleFile] = useState(true);

  const ismodalOpen = ModalOpen;

  var user = {
    userData: {
      isAuth: false,
    },
  };

  let state = useSelector((state) => state);

  if (state.user.userData) {
    user = state.user;
  }

  const uploadOnClickHandler = () => {
    setModalOpen(true);
  };

  const overlayOnClickHandler = () => {
    setModalOpen(false);
  };

  ////////////////////////using Dropzone//////////////////////////

  const PrivateOptions = [
    { value: '나만보기', label: '나만보기' },
    { value: '친구만', label: '친구만' },
    { value: '전체보기', label: '전체보기' },
  ];

  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Private, setPrivate] = useState(0);
  const [Category, setCategory] = useState('Film & Animation');

  const [FilePath, setFilePath] = useState('');
  const [FileName, setFileName] = useState('');
  const [ResizedFilePath, setResizedFilePath] = useState('');
  const [Duration, setDuration] = useState('');
  const [Thumbnail, setThumbnail] = useState('');
  const [Mimetype, setMimetype] = useState('');
  // image/png
  const [filesLength, setfilesLength] = useState(0);
  const [FilePathsArr, setFilePathsArr] = useState([]); //ok
  const [DurationsArr, setDurationsArr] = useState([]); //ok
  const [ThumbnailsArr, setThumbnailsArr] = useState([]); //ok
  const [ResizedFilePathsArr, setResizedFilePathsArr] = useState([]); //ok
  const [displayFilePathsArr, setdisplayFilePathsArr] = useState([]);
  const [MimetypesArr, setMimetypesArr] = useState([]);

  const [isFilePathsArrSetted, setisFilePathsArrSetted] = useState(false);

  useEffect(() => {
    console.log('state changes..');
    console.log(displayFilePathsArr);
  }, [displayFilePathsArr]);

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };

  const onPrivateChange = (e) => {
    console.log(e);
    setPrivate(e);
  };

  const onCategoryChange = (e) => {
    console.log(e);
    setCategory(e);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      writer: user.userData._id,
      post_title: Title,
      post_content: Description,
      privacy: Private,
      category: Category,
      filePath: FilePath,
      duration: Duration,
      thumbnail: Thumbnail,
      resizedFilePath: ResizedFilePath,
    };

    const variables2 = {
      writer: user.userData._id,
      post_title: Title,
      post_content: Description,
      privacy: Private,
      category: Category,
      filePath: String(FilePath).replace('\\', '/'),
      duration: Duration,
      thumbnail: Thumbnail,
      mimetype: Mimetype, //ok
      resizedFilePath: ResizedFilePath,
      filePathsArr: FilePathsArr, //ok
      durationsArr: DurationsArr, //ok
      thumbnailsArr: ThumbnailsArr, //ok
      resizedFilePathsArr: ResizedFilePathsArr, //ok
      mimetypesArr: MimetypesArr, //ok
    };

    console.log(variables2);

    Axios.post('/api/formDatas/fileUpload', variables2).then((response) => {
      if (response.data.success) {
        // window.message.success("The file uploaded successfully..")
        alert('게시물을 성공적으로 업로드했습니다.');
        setFilePathsArr([]);
        setDurationsArr([]);
        setThumbnailsArr([]); //ok
        setResizedFilePathsArr([]);
        setMimetypesArr([]);
        setdisplayFilePathsArr([]);
      } else {
        alert('게시물 업로드에 실패했습니다.');
      }
      setModalOpen(false);
    });
  };

  const onDrop = (files) => {
    let index = 0;
    setfilesLength(files.length);

    const uploadFileAsyncFunc = async function () {
      let formData = new FormData();

      const config = {
        header: { 'content-type': 'multipart/form-data' },
      };

      let setFormDataFile_filesIndex = await new Promise((resolve, reject) => {
        console.log('onDrop formData');
        console.log(files);

        formData.set('file', files[index]);
        index = index + 1;
        resolve(index);
      });

      // TEST
      let uploadDropedFileAtServer = await new Promise((resolve, reject) => {
        console.log('파일인덱스' + setFormDataFile_filesIndex);

        console.log(formData.get('file'));
        Axios.post('/api/formDatas/uploadSingleFile', formData, config).then(
          (response) => {
            if (response.data.success) {
              console.log(response.data);
              setFilePath(String(response.data.filePath).replace('\\', '/'));
              FilePathsArr.push(
                String(response.data.filePath).replace('\\', '/')
              );
              setFileName(response.data.fileName);
              setMimetype(response.data.mimetype);
              MimetypesArr.push(response.data.mimetype);
              resolve(response.data);
            } else {
              alert('파일 업로드에 실패했습니다.');
            }
          }
        );
      });

      let makeThumbOrResize = await new Promise((resolve, reject) => {
        console.log(uploadDropedFileAtServer);
        let isVIDEO = false;
        if (
          (uploadDropedFileAtServer.fileName.match(/.mp4/) &&
            uploadDropedFileAtServer.fileName.endsWith('.mp4')) ||
          (uploadDropedFileAtServer.fileName.match(/.avi/) &&
            uploadDropedFileAtServer.fileName.endsWith('.avi')) ||
          (uploadDropedFileAtServer.fileName.match(/.AVI/) &&
            uploadDropedFileAtServer.fileName.endsWith('.AVI')) ||
          (uploadDropedFileAtServer.fileName.match(/.mpg/) &&
            uploadDropedFileAtServer.fileName.endsWith('.mpg')) ||
          (uploadDropedFileAtServer.fileName.match(/.MPG/) &&
            uploadDropedFileAtServer.fileName.endsWith('.MPG')) ||
          (uploadDropedFileAtServer.fileName.match(/.wmv/) &&
            uploadDropedFileAtServer.fileName.endsWith('.wmv')) ||
          (uploadDropedFileAtServer.fileName.match(/.WMV/) &&
            uploadDropedFileAtServer.fileName.endsWith('.WMV')) ||
          (uploadDropedFileAtServer.fileName.match(/.mwa/) &&
            uploadDropedFileAtServer.fileName.endsWith('.mwa')) ||
          (uploadDropedFileAtServer.fileName.match(/.MWA/) &&
            uploadDropedFileAtServer.fileName.endsWith('.MWA')) ||
          (uploadDropedFileAtServer.fileName.match(/.asf/) &&
            uploadDropedFileAtServer.fileName.endsWith('.asf')) ||
          (uploadDropedFileAtServer.fileName.match(/.ASF/) &&
            uploadDropedFileAtServer.fileName.endsWith('.ASF')) ||
          (uploadDropedFileAtServer.fileName.match(/.mpg/) &&
            uploadDropedFileAtServer.fileName.endsWith('.mpg')) ||
          (uploadDropedFileAtServer.fileName.match(/.MPG/) &&
            uploadDropedFileAtServer.fileName.endsWith('.MPG')) ||
          (uploadDropedFileAtServer.fileName.match(/.mpeg/) &&
            uploadDropedFileAtServer.fileName.endsWith('.mpeg')) ||
          (uploadDropedFileAtServer.fileName.match(/.MPEG/) &&
            uploadDropedFileAtServer.fileName.endsWith('.MPEG')) ||
          (uploadDropedFileAtServer.fileName.match(/.mov/) &&
            uploadDropedFileAtServer.fileName.endsWith('.mov')) ||
          (uploadDropedFileAtServer.fileName.match(/.MOV/) &&
            uploadDropedFileAtServer.fileName.endsWith('.MOV')) ||
          (uploadDropedFileAtServer.fileName.match(/.m4r/) &&
            uploadDropedFileAtServer.fileName.endsWith('.m4r')) ||
          (uploadDropedFileAtServer.fileName.match(/.M4R/) &&
            uploadDropedFileAtServer.fileName.endsWith('.M4R')) ||
          (uploadDropedFileAtServer.fileName.match(/.3gp/) &&
            uploadDropedFileAtServer.fileName.endsWith('.3gp')) ||
          (uploadDropedFileAtServer.fileName.match(/.3GP/) &&
            uploadDropedFileAtServer.fileName.endsWith('.3GP')) ||
          (uploadDropedFileAtServer.fileName.match(/.3g2/) &&
            uploadDropedFileAtServer.fileName.endsWith('.3g2')) ||
          (uploadDropedFileAtServer.fileName.match(/.3G2/) &&
            uploadDropedFileAtServer.fileName.endsWith('.3G2')) ||
          (uploadDropedFileAtServer.fileName.match(/.webm/) &&
            uploadDropedFileAtServer.fileName.endsWith('.webm')) ||
          (uploadDropedFileAtServer.fileName.match(/.WEBM/) &&
            uploadDropedFileAtServer.fileName.endsWith('.WEBM')) ||
          (uploadDropedFileAtServer.fileName.match(/.mkv/) &&
            uploadDropedFileAtServer.fileName.endsWith('.mkv')) ||
          (uploadDropedFileAtServer.fileName.match(/.nut/) &&
            uploadDropedFileAtServer.fileName.endsWith('.nut')) ||
          (uploadDropedFileAtServer.fileName.match(/.NUT/) &&
            uploadDropedFileAtServer.fileName.endsWith('.NUT')) ||
          (uploadDropedFileAtServer.fileName.match(/.sec/) &&
            uploadDropedFileAtServer.fileName.endsWith('.sec')) ||
          (uploadDropedFileAtServer.fileName.match(/.SEC/) &&
            uploadDropedFileAtServer.fileName.endsWith('.SEC')) ||
          (uploadDropedFileAtServer.fileName.match(/.xmv/) &&
            uploadDropedFileAtServer.fileName.endsWith('.xmv')) ||
          (uploadDropedFileAtServer.fileName.match(/.XMV/) &&
            uploadDropedFileAtServer.fileName.endsWith('.XMV')) ||
          (uploadDropedFileAtServer.fileName.match(/.y4m/) &&
            uploadDropedFileAtServer.fileName.endsWith('.y4m')) ||
          (uploadDropedFileAtServer.fileName.match(/.Y4M/) &&
            uploadDropedFileAtServer.fileName.endsWith('.Y4M'))
        ) {
          console.log('썸네일을 생성합니다. 동영상 파일입니다.');
          isVIDEO = true;
          Axios.post('/api/formDatas/thumbnails', {
            filePath: uploadDropedFileAtServer.filePath,
            fileName: uploadDropedFileAtServer.fileName,
          }).then((response) => {
            if (response.data.success) {
              setDuration(response.data.fileDuration);
              DurationsArr.push(response.data.fileDuration);
              setThumbnail(response.data.thumbsFilePath);
              ThumbnailsArr.push(response.data.thumbsFilePath);
              resolve(isVIDEO);
            } else {
              alert('썸네일 생성에 실패하였습니다. ');
            }
          });
        } else if (
          (uploadDropedFileAtServer.fileName.match(/.png/) &&
            uploadDropedFileAtServer.fileName.endsWith('.png')) ||
          (uploadDropedFileAtServer.fileName.match(/.PNG/) &&
            uploadDropedFileAtServer.fileName.endsWith('.PNG')) ||
          (uploadDropedFileAtServer.fileName.match(/.jpg/) &&
            uploadDropedFileAtServer.fileName.endsWith('.jpg')) ||
          (uploadDropedFileAtServer.fileName.match(/.JPG/) &&
            uploadDropedFileAtServer.fileName.endsWith('.JPG')) ||
          (uploadDropedFileAtServer.fileName.match(/.jpeg/) &&
            uploadDropedFileAtServer.fileName.endsWith('.jpeg')) ||
          (uploadDropedFileAtServer.fileName.match(/.JPEG/) &&
            uploadDropedFileAtServer.fileName.endsWith('.JPEG')) ||
          (uploadDropedFileAtServer.fileName.match(/.gif/) &&
            uploadDropedFileAtServer.fileName.endsWith('.gif')) ||
          (uploadDropedFileAtServer.fileName.match(/.GIF/) &&
            uploadDropedFileAtServer.fileName.endsWith('.GIF')) ||
          (uploadDropedFileAtServer.fileName.match(/.webp/) &&
            uploadDropedFileAtServer.fileName.endsWith('.webp')) ||
          (uploadDropedFileAtServer.fileName.match(/.WebP/) &&
            uploadDropedFileAtServer.fileName.endsWith('.WebP')) ||
          (uploadDropedFileAtServer.fileName.match(/.tiff/) &&
            uploadDropedFileAtServer.fileName.endsWith('.tiff')) ||
          (uploadDropedFileAtServer.fileName.match(/.TIFF/) &&
            uploadDropedFileAtServer.fileName.endsWith('.TIFF')) ||
          (uploadDropedFileAtServer.fileName.match(/.svg/) &&
            uploadDropedFileAtServer.fileName.endsWith('.svg')) ||
          (uploadDropedFileAtServer.fileName.match(/.SVG/) &&
            uploadDropedFileAtServer.fileName.endsWith('.SVG'))
        ) {
          console.log(
            '썸네일을 생성하지 않습니다. 리사이징을 요청합니다. 이미지 파일입니다.'
          );
          isVIDEO = false;
          Axios.post('/api/formDatas/resizing', {
            filePath: uploadDropedFileAtServer.filePath,
            fileName: uploadDropedFileAtServer.fileName,
          }).then((response) => {
            if (response.data.success) {
              console.log('The file resized..');
              setResizedFilePath(
                `uploads\\resized-${uploadDropedFileAtServer.fileName}`.replace(
                  '\\',
                  '/'
                )
              );
              // setResizedFilePathsArr(
              ResizedFilePathsArr.push(
                `uploads\\resized-${uploadDropedFileAtServer.fileName}`.replace(
                  '\\',
                  '/'
                )
                // )
              );
              console.log(`resized file path : ${ResizedFilePath}`);

              resolve(isVIDEO);
            } else {
              alert('resizing failed');
            }
          });
        } else {
          alert('지원하지 않는 파일 유형입니다.');
          console.log(
            '썸네일을 생성하지 않습니다. 리사이징을 요청하지 않습니다. 지원하지 않는 파일 유형입니다.'
          );
          resolve('err');
        }
      });

      let setResizedOrThumbsImgArr = await new Promise((resolve, reject) => {
        console.log(makeThumbOrResize);

        console.log(FilePathsArr);
        console.log(DurationsArr);
        console.log(ThumbnailsArr);
        console.log(ResizedFilePathsArr);

        resolve({
          FilePathsArr: FilePathsArr,
          DurationsArr: DurationsArr,
          ThumbnailsArr: ThumbnailsArr,
          ResizedFilePathsArr: ResizedFilePathsArr,
          MimetypesArr: MimetypesArr,
        });
      });

      return {
        FilePathsArr: FilePathsArr,
        DurationsArr: DurationsArr,
        ThumbnailsArr: ThumbnailsArr,
        ResizedFilePathsArr: ResizedFilePathsArr,
        MimetypesArr: MimetypesArr,
      };
    };

    for (let i = 0; i < files.length; ++i) {
      uploadFileAsyncFunc().then((value) => {
        console.log(value);
        console.log(
          files.length +
            '개의 파일들 중' +
            (i + 1) +
            '번째 파일을 서버에 업로드했습니다.'
        );
        if (value.FilePathsArr.length >= files.length) {
          console.log(ResizedFilePathsArr.concat(ThumbnailsArr));
          setdisplayFilePathsArr(ResizedFilePathsArr.concat(ThumbnailsArr));
          setisFilePathsArrSetted(true);
        }
      });
    }
  };

  return (
    <div className='div_uploadContainer'>
      {ModalOpen == true && (
        <div className='div_Modal'>
          <div className='div_Modal_'>
            <div className='div_ModalContainer'>
              <div
                className='div_ModalOverlay'
                onClick={() => {
                  overlayOnClickHandler();
                }}
              ></div>
            </div>

            <div className='div_ModalContents'>
              <div className='div_ModalContents_'>
                <div className='div_ModalContents_title'>
                  <span>게시물 만들기</span>
                  <div className='div_ModalContents_title_close'></div>
                </div>

                <form onSubmit={onSubmit}>
                  <div className='div_ModalContents_body'>
                    <div className='div_ModalContents_body_header'>
                      <Avatar
                        style={{
                          margin: '4px',
                          cursor: 'pointer',
                          width: '40px',
                          height: '40px',
                        }}
                        src={
                          'http://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E'
                        }
                      />
                      <div className='div_ModalContents_body_header_'>
                        <span>{user.userData.user_name}</span>
                        <select defaultValue='나만보기'>
                          {PrivateOptions.map((item, index) => (
                            <option key={index} value={`${item.value}`}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className='div_ModalContents_body_text'>
                      {user && (
                        <textarea
                          placeholder={`${user.userData.user_name} 님 무슨 생각을 하고 계신가요?`}
                          onChange={onDescriptionChange}
                          value={Description}
                        ></textarea>
                      )}
                      <div className='div_ModalContents_body_displayFiles'>
                        {isFilePathsArrSetted === true && (
                          <div
                            className={
                              displayFilePathsArr.length < 1
                                ? 'div_prevImgRow1_3'
                                : displayFilePathsArr.length == 1
                                ? 'div_prevImgRow1_1'
                                : 'div_prevImgRow1_2'
                            }
                          >
                            <img
                              className={
                                displayFilePathsArr.length < 1
                                  ? 'img_prevImgRow1_3'
                                  : displayFilePathsArr.length == 1
                                  ? 'img_prevImgRow1_1'
                                  : 'img_prevImgRow1_2'
                              }
                              src={
                                displayFilePathsArr.length < 1
                                  ? ''
                                  : // : `http://localhost:5000/${displayFilePathsArr[0]}`
                                    `https://www.ftclone.com/${displayFilePathsArr[0]}`
                              }
                              // src={`https://www.ftclone.com/${Thumbnail}`}
                              alt='displayThumbnails'
                            />
                            {/* {displayFilePathsArr.length >= 2 && ( */}
                            <img
                              className={
                                displayFilePathsArr.length <= 1
                                  ? 'img_prevImgRow1_3'
                                  : 'img_prevImgRow1_2'
                              }
                              src={
                                displayFilePathsArr.length <= 1
                                  ? ''
                                  : // : `http://localhost:5000/${displayFilePathsArr[1]}`
                                    `https://www.ftclone.com/${displayFilePathsArr[1]}`
                              }
                              // src={`https://www.ftclone.com/${Thumbnail}`}
                              alt='displayThumbnails'
                            />
                            {/* )} */}
                          </div>
                        )}
                        {isFilePathsArrSetted === true && (
                          // {ResizedFilePath !== '' && (
                          <div
                            className={
                              displayFilePathsArr.length <= 2
                                ? 'div_previmgRow2_1'
                                : 'div_previmgRow2_2'
                            }
                          >
                            <img
                              className={
                                displayFilePathsArr.length < 3
                                  ? 'img_prevImgRow2_4'
                                  : displayFilePathsArr.length == 3
                                  ? 'img_prevImgRow2_1'
                                  : displayFilePathsArr.length == 4
                                  ? 'img_prevImgRow2_2'
                                  : 'img_prevImgRow2_3'
                              }
                              src={
                                displayFilePathsArr.length <= 2
                                  ? ''
                                  : // : `http://localhost:5000/${displayFilePathsArr[2]}`
                                    `https://www.ftclone.com/${displayFilePathsArr[2]}`
                              }
                              // src={`https://www.ftclone.com/${ResizedFilePath}`}
                              alt='displayImage'
                            />
                            <img
                              className={
                                displayFilePathsArr.length <= 3
                                  ? 'img_prevImgRow2_4'
                                  : displayFilePathsArr.length == 4
                                  ? 'img_prevImgRow2_2'
                                  : 'img_prevImgRow2_3'
                              }
                              src={
                                displayFilePathsArr.length <= 3
                                  ? ''
                                  : // : `http://localhost:5000/${displayFilePathsArr[3]}`
                                    `https://www.ftclone.com/${displayFilePathsArr[3]}`
                              }
                              // src={`https://www.ftclone.com/${ResizedFilePath}`}
                              alt='displayImage'
                            />
                            <div
                              className={
                                displayFilePathsArr.length <= 4
                                  ? 'img_prevImgRow2_4'
                                  : displayFilePathsArr.length == 5
                                  ? 'img_prevImgRow2_3'
                                  : 'img_prevImgRow2_5'
                              }
                            >
                              <img
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  filter: 'brightness(50%)',
                                }}
                                src={
                                  displayFilePathsArr.length <= 4
                                    ? ''
                                    : // : `http://localhost:5000/${displayFilePathsArr[4]}`
                                      `https://www.ftclone.com/${displayFilePathsArr[4]}`
                                }
                                // src={`https://www.ftclone.com/${ResizedFilePath}`}
                                alt='displayImage'
                              />
                              <p className='p_img_prevImgRow2_5_filesCount'>
                                {' '}
                                + {displayFilePathsArr.length - 5}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className='div_ModalContents_body_files'>
                        <Dropzone
                          style={{
                            position: 'static',
                            height: '20px',
                            minWidth: '100px',
                          }}
                          onDrop={onDrop}
                          multiple={true}
                          maxSize={800000000}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <div
                              className='div_mainContainer_dropzone_content__'
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <span
                                className=''
                                style={{
                                  marginRight: '8px',
                                  fontFamily: 'inherit',
                                  lineHeight: '1.0667',
                                  cursor: 'pointer',
                                  WebkitFontFmoothing: 'antialiased',
                                }}
                              >
                                <VideoCameraFilled
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    fontSize: '24px',
                                    color: '#f02849',
                                  }}
                                />
                              </span>
                              <span style={{ marginRight: '8px' }}>
                                <PictureFilled
                                  style={{
                                    paddingRight: '8px',
                                    width: '24px',
                                    height: '24px',
                                    fontSize: '24px',
                                    color: '#45bd62',
                                  }}
                                />
                              </span>
                              <span style={{ marginRight: '8px' }}>
                                <SmileOutlined
                                  style={{
                                    width: '24px',
                                    height: '24px',
                                    fontSize: '24px',
                                    color: '#f7b928',
                                  }}
                                />
                              </span>
                            </div>
                          )}
                        </Dropzone>
                      </div>
                      <button
                        type='submit'
                        onClick={onSubmit}
                        style={{
                          color: '#ffffff',
                          borderRadius: '6px',
                          fontFamily:
                            'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif;',
                          fontSize: '0.925rem',
                          fontWeight: '560',
                          lineHeight: '1.0667',
                          cursor: 'pointer',
                          WebkitFontFmoothing: 'antialiased',
                          borderColor: '#1877f2',
                          background: '#1877f2',
                          height: 'auto',
                          marginTop: '40px',
                          marginBottom: '0px',
                        }}
                      >
                        게시
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='div_uploadUnit'>
        <div className='div_uploadUnit_'>
          <div className='div_uploadUnit_inputs'>
            <div className='div_uploadUnit_inputs_'>
              <div className='div_uploadUnit_inputs_Avatar'>
                <Avatar
                  style={{ cursor: 'pointer', width: '100%', height: '100%' }}
                  src={
                    'http://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E'
                  }
                >
                  <a href='#' role='link'></a>
                </Avatar>
              </div>
              <div className='div_uploadUnit_inputs_text'>
                <span onClick={() => uploadOnClickHandler()}>
                  {user.userData.isAuth
                    ? `${user.userData.user_name}님 무슨 생각을 하고 계신가요?`
                    : '로그인이 필요합니다.'}
                </span>
              </div>
            </div>
          </div>
          <div className='div_uploadUnit_files'>
            <div className='div_uploadUnit_files_liveBroadcast'>
              <div className='div_uploadUnit_files_liveBroadcast_'>
                <span
                  className='liveIcon'
                  //   style={{
                  //     marginRight: '8px',
                  //     fontFamily: 'inherit',
                  //     lineHeight: '1.0667',
                  //     cursor: 'pointer',
                  //     WebkitFontFmoothing: 'antialiased',
                  //   }}
                >
                  <VideoCameraFilled
                    style={{
                      marginRight: '8px',
                      width: '100%',
                      height: '100%',
                      fontSize: '1.5em',
                      color: '#f02849',
                    }}
                  />
                </span>
                <span
                  onClick={() => uploadOnClickHandler()}
                  style={{
                    fontFamily:
                      'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif',
                    wordBreak: 'break-word',
                    color: '#65676B',
                    fontWeight: '600',
                    fontSize: '1.0em',
                    lineHeight: '1.3333em',
                    cursor: 'pointer',
                  }}
                >
                  라이브 방송
                </span>
              </div>
            </div>
            <div className='div_uploadUnit_files_photosNvideos'>
              <div className='div_uploadUnit_files_photosNvideos_'>
                <span className='imgIcon'>
                  <PictureFilled
                    style={{
                      marginRight: '8px',
                      width: '100%',
                      height: '100%',
                      fontSize: '1.5em',
                      color: '#45bd62',
                    }}
                  />
                </span>
                <span
                  onClick={() => uploadOnClickHandler()}
                  style={{
                    fontFamily:
                      'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif',
                    wordBreak: 'break-word',
                    color: '#65676B',
                    fontWeight: '600',
                    fontSize: '1.0em',
                    lineHeight: '1.3333',
                    cursor: 'pointer',
                  }}
                >
                  사진/동영상
                </span>
              </div>
            </div>
            <div className='div_uploadUnit_files_broadcast_feelingsNactivities'>
              <div className='div_uploadUnit_files_broadcast_feelingsNactivities_'>
                <span className='emotionIcon'>
                  <SmileOutlined
                    style={{
                      marginRight: '8px',
                      width: '100%',
                      height: '100%',
                      fontSize: '1.5em',
                      color: '#f7b928',
                    }}
                  />
                </span>
                <span
                  onClick={() => uploadOnClickHandler()}
                  style={{
                    fontFamily:
                      'Segoe UI Historic, Segoe UI, Arial, Helvetica, sans-serif',
                    wordBreak: 'break-word',
                    color: '#65676B',
                    fontWeight: '600',
                    fontSize: '1.0em',
                    lineHeight: '1.3333',
                    cursor: 'pointer',
                  }}
                >
                  기분/활동
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Upload);
