import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import {
  Modal,
  Carousel,
  Avatar,
  Typography,
  Menu,
  Dropdown,
  Button,
  Space,
} from 'antd';

import Icon, {
  DeleteOutlined,
  InboxOutlined,
  CalendarOutlined,
  GlobalOutlined,
  ReloadOutlined,
  LockFilled,
  EditOutlined,
  CodeOutlined,
  InfoCircleOutlined,
  BellOutlined,
  TagOutlined,
  MessageFilled,
  CloseSquareOutlined,
  EllipsisOutlined,
  LikeFilled,
  LikeOutlined,
  LikeTwoTone,
  MessageOutlined,
} from '@ant-design/icons';

import Dropzone from 'react-dropzone';
import { useSelector } from 'react-redux';
import Logo from './Sections/Logo';
import Navigation from './Sections/Navigation';
import Complementary from './Sections/Complementary';
import moment from 'moment';
import Upload from './Sections/Upload';
import Comment from './Sections/Comment';
import Like from './Sections/Like';
import LikeCount from './Sections/LikeCount';
import { expressServerPort } from '../../../Config';
import * as dateFns from 'date-fns';
import { useHistory } from 'react-router-dom';

import './styles.css';

function LandingPage(props) {
  let history = useHistory();

  const [Posts, setPosts] = useState([]);
  const [CommentLists, setCommentLists] = useState([]);
  const [LikeList, setLikeList] = useState([]);
  const [isLike, setisLike] = useState(0);
  const [LikeListLength, setLikeListLength] = useState(0);
  const [isPostSettingOpenedState, setisPostSettingOpenedState] = useState(0);

  var user = {
    userData: {
      isAuth: false,
    },
  };

  let state = useSelector((state) => state);

  if (state.user.userData) {
    user = state.user;
  } else {
    history.push('/login');
    alert(
      '로그인하신 후 서비스를 이용해주세요. [ 게스트 계정 - ftclone@naver.com / ftclone12345 ]'
    );
  }

  const [CommentOpenPosts, setCommentOpenPosts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(
    (props) => {
      Axios.get('/api/FormDatas/getPosts').then((response) => {
        if (response.data.success) {
          console.log('게시글 목록을 가져옵니다.');
          setPosts(response.data.posts);
        } else {
          alert('게시글목록 정보 가져오기에 실패하였습니다.');
        }
      });

      Axios.get('/api/comment/getComments').then((response) => {
        if (response.data.success) {
          console.log('댓글 목록을 가져옵니다.');
          setCommentLists(response.data.comments);
        } else {
          alert('댓글목록 정보 가져오기에 실패하였습니다.');
        }
      });

      Axios.get('/api/like/getLikes')
        .then((response) => {
          if (response.data.success) {
            console.log('좋아요 목록을 가져옵니다.');
            setLikeList(response.data.likeList);
          } else {
            alert('fail to get likes');
          }
        })
        .then((response) => {
          setLikeListLength(LikeList.length);
        });
    },
    [isLike]
  );

  // const updateComment = (newComment) => {
  //     setCommentsState(CommentsState.concat(newComment))
  // }

  const renderPosts = Posts.map((post, index) => {
    var minutes = Math.floor(post.duration / 60);
    var seconds = Math.floor(post.duration - minutes * 60);

    let rindex = 0;
    let tindex = 0;
    let resizedFilePathsArr = post.resizedFilePathsArr;
    let thumbnailsArr = post.thumbnailsArr;
    let displayFilePathsArr = resizedFilePathsArr.concat(thumbnailsArr);

    let filePathsArrLength = post.filePathsArr.length;

    let ThisPostCommentList = [];
    ThisPostCommentList = CommentLists.filter((comment, index) => {
      if (comment.postId) {
        return comment.postId._id === post._id;
      }
    });

    let ThisPostLikeList = [];
    ThisPostLikeList = LikeList.filter((like, index) => {
      if (like.postId) {
        return like.postId._id === post._id && like.commentId == null;
      }
    });

    // setisLike(ThisPostLikeList.some(like => {
    //     like.userId._id = user.userData._id
    // }))

    let isthisUserthisPostLike = ThisPostLikeList.some((like) => {
      return (like.userId._id = user.userData._id && like.commentId == null);
    });

    console.log(
      ThisPostLikeList.some((like) => {
        return (like.userId._id = user.userData._id);
      })
    );

    const clickLike = (post) => {
      let submitData = {
        postId: post._id,
        userId: user.userData._id,
      };

      Axios.post('/api/like/getLikeState', submitData)
        .then((response) => {
          if (response.data.success) {
          } else {
            alert('getting the Like State failed');
          }
        })
        .then((response) => {
          if (!user.userData.isAuth) {
            alert('로그인이 필요합니다.');
          } else {
            if (!isthisUserthisPostLike) {
              Axios.post('/api/like/upLike', submitData)
                .then((response) => {
                  if (response.data.success) {
                    ThisPostLikeList.push(response.data.likeResult);
                  } else {
                    alert('Failed to change the Like state');
                  }
                  setisLike(!isLike);
                })
                .then((response) => {
                  console.log('게시물에 좋아요가 추가되었습니다');
                  isthisUserthisPostLike = !isthisUserthisPostLike;
                  setLikeListLength(LikeListLength + 1);
                  alert('게시물에 좋아요가 추가되었습니다.');
                });
            } else {
              Axios.post('/api/like/unLike', submitData)
                .then((response) => {
                  if (response.data.success) {
                    let index = ThisPostLikeList.indexOf(
                      response.data.likeResult
                    );
                    ThisPostLikeList.splice(index, 1);
                  } else {
                    alert('Failed to change the Like state');
                  }
                  setisLike(!isLike);
                })
                .then((response) => {
                  console.log('게시물에 좋아요가 삭제되었습니다.');
                  isthisUserthisPostLike = !isthisUserthisPostLike;
                  setLikeListLength(LikeListLength - 1);
                  alert('게시물에 좋아요가 삭제되었습니다.');
                });
            }
          }
        });
    };

    const commentOpenHandler = (postId) => {
      if (!user.userData.isAuth) {
        alert('로그인이 필요합니다.');
      } else {
        var index = CommentOpenPosts.indexOf(String(postId));
        if (index === -1) {
          setCommentOpenPosts(CommentOpenPosts.concat(postId));
        } else {
          setCommentOpenPosts(CommentOpenPosts.splice(index, 1));
        }
      }
    };

    const deletePost = (post) => {
      console.log('#게시물 삭제 ');

      const variables = {
        postId: post._id,
      };

      Axios.delete('/api/formDatas/deletePost', { data: variables }).then(
        (response) => {
          if (response.data.success) {
            alert('게시물을 성공적으로 삭제했습니다.');
            console.log(response.data);
          } else {
            alert('게시물 삭제에 실패했습니다.');
            console.log(response.data.err);
          }
        }
      );
    };

    const myPostMenus = (
      <Menu style={{ padding: '8px 0', borderRadius: '4px' }}>
        <Menu.Item
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <TagOutlined /> 링크 저장
          </a>
        </Menu.Item>
        <hr style={{ margin: '8px 16px', borderColor: '#dadde1' }} />
        <Menu.Item
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          {/* <button
            style={{
              backgroundColor: 'white',
              textDecoration: 'none',
              color: 'red !important',
              border: 'none',
              margin: '0px',
              padding: '0px',
            }}
            // onClick={() => deletePost(post)}
          > */}
          <a target='_self' rel='noopener noreferrer' href=''>
            <EditOutlined /> 게시물 수정
          </a>
          {/* </button> */}
        </Menu.Item>
        <Menu.Item
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <LockFilled /> 공개 대상 수정
          </a>
        </Menu.Item>
        <Menu.Item
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <BellOutlined /> 이 게시물에 대한 알림 해제
          </a>
        </Menu.Item>
        <Menu.Item
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <GlobalOutlined /> 번역 해제
          </a>
        </Menu.Item>
        <Menu.Item
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <CalendarOutlined /> 날짜 수정
          </a>
        </Menu.Item>
        <Menu.Item
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <ReloadOutlined /> 공유 첨부 파일 새로 고침
          </a>
        </Menu.Item>
        <hr style={{ margin: '8px 16px', borderColor: '#dadde1' }} />
        <Menu.Item style={{ padding: '8px', margin: '0% 8px' }}>
          <a target='_self' rel='noopener noreferrer' href=''>
            <InboxOutlined /> 보관함으로 이동
          </a>
        </Menu.Item>
        <Menu.Item style={{ padding: '8px', margin: '0% 8px' }}>
          <button
            style={{
              backgroundColor: 'white',
              textDecoration: 'none',
              color: 'red !important',
              border: 'none',
              margin: '0px',
              padding: '0px',
            }}
            onClick={() => deletePost(post)}
          >
            {/* <a> */}
            <DeleteOutlined /> 휴지통으로 이동
            {/* </a> */}
          </button>
        </Menu.Item>
      </Menu>
    );

    const postMenus = (
      <Menu style={{ padding: '8px 0', borderRadius: '4px' }}>
        <Menu.Item
          key='1'
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <CloseSquareOutlined /> 광고 숨기기
          </a>
        </Menu.Item>
        <Menu.Item
          key='2'
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <MessageFilled /> 광고 신고하기
          </a>
        </Menu.Item>
        <hr style={{ margin: '8px 16px', borderColor: '#dadde1' }} />
        <Menu.Item
          key='3'
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <TagOutlined /> 링크 저장
          </a>
        </Menu.Item>
        <hr style={{ margin: '8px 16px', borderColor: '#dadde1' }} />
        <Menu.Item
          key='4'
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <BellOutlined /> 이 게시물에 대한 알림 설정
          </a>
        </Menu.Item>
        <Menu.Item
          key='5'
          style={{ padding: '8px', margin: '0% 8px', borderRadius: '4px' }}
        >
          <a target='_self' rel='noopener noreferrer' href=''>
            <InfoCircleOutlined /> 이 광고가 표시되는 이유는?
          </a>
        </Menu.Item>
        <Menu.Item key='6' style={{ padding: '8px', margin: '0% 8px' }}>
          <a target='_self' rel='noopener noreferrer' href=''>
            <CodeOutlined /> 퍼가기
          </a>
        </Menu.Item>
      </Menu>
    );

    const commentMenus = (
      <Menu>
        <React.Fragment>
          <Menu.Item key='1'>
            {/* <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.antgroup.com'
            > */}
            1st menu item
            {/* </a> */}
          </Menu.Item>
          <Menu.Item key='2'>
            {/* <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.aliyun.com'
            > */}
            2nd menu item
            {/* </a> */}
          </Menu.Item>
        </React.Fragment>
      </Menu>
    );
    function onChange(fileNo) {
      console.log('current file slide number : ' + fileNo);
    }

    const contentStyle = {
      // height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',

      fontFamily: 'inherit',
      width: '100%',
      /* z-index: auto; */
      height: 'auto',
      display: 'block',

      overscrollBehaviorY: 'none',
      backgroundColor: 'transparent',
      touchAction: 'manipulation',

      position: 'static',
      // width: 100%;
      // height: 100%;
      cursor: 'pointer',

      border: '0',
      outline: '0',
      textDecoration: 'none',
    };

    return (
      <div className='div_postContainer' key={index}>
        <div className='div_postUnit'>
          <div className='div_postUnit_header'>
            <span>추천 게시물</span>
          </div>
          <div className='div_postUnit_navContent'>
            <div className='div_postUnit_navContent_'>
              <Avatar
                style={{ cursor: 'pointer', width: '40px' }}
                src={
                  'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E'
                }
              >
                <a href='#' role='link'></a>
              </Avatar>
              <div className='div_postUnit_navContent__'>
                <div
                  style={{ marginTop: '3px' }}
                  className='div_postUnit_navContent__userID'
                >
                  {post.writer.user_name}
                </div>
                <div
                  style={{ marginTop: '2px' }}
                  className='div_postUnit_navContent__createDate'
                >
                  {dateFns.format(new Date(post.createdAt), 'yyyy년 MM월 dd일')}
                </div>
              </div>
              <div className='div_postUnit_navContent_options'>
                <Space wrap style={{ width: '36px', height: '36px' }}>
                  <Dropdown
                    trigger='click'
                    overlay={
                      post.writer._id == user.userData._id
                        ? myPostMenus
                        : postMenus
                    }
                    placement='bottomRight'
                  >
                    <Button
                      trigger='click'
                      className='MenuBtn'
                      style={{
                        color: 'black',
                        borderRadius: '50%',
                        padding: '4px 8px',
                      }}
                    >
                      <EllipsisOutlined style={{ cursor: 'pointer' }} />
                    </Button>
                  </Dropdown>
                </Space>
              </div>
            </div>
          </div>
          <div className='div_postUnit_mainContent'>
            <div className='div_postUnit_mainContent_textContent'>
              <div className='div_postUnit_mainContent_textContent_'>
                <span>{post.post_content}</span>
              </div>
            </div>

            <div className='div_postUnit_mainContent_fileContent'>
              <Modal
                title='FTclone'
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Carousel dotPosition='top' afterChange={onChange}>
                  {post.mimetypesArr.map((mimetype, index) => {
                    if (String(mimetype).startsWith('image')) {
                      return (
                        <div
                          style={contentStyle}
                          className='div_postUnit_mainContent_fileContent_'
                        >
                          <img
                            referrerPolicy='origin-when-cross-origin'
                            src={`https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                              resizedFilePathsArr[rindex++]
                            )}`}
                            alt='imgPosting'
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div
                          style={contentStyle}
                          className='div_postUnit_mainContent_fileContent_'
                        >
                          <video
                            src={`https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                              post.filePathsArr[index]
                            )}`}
                            style={{ display: 'block' }}
                            controls
                          ></video>
                        </div>
                      );
                    }
                  })}
                </Carousel>
              </Modal>
              <span data-visualcompletion='ignore'>
                {post.filePathsArr.length > 1 ? (
                  <div style={{ display: 'none' }}></div>
                ) : post.thumbnail == '' ? (
                  post.filePath == '' ? (
                    <div></div>
                  ) : (
                    <div className='div_postUnit_mainContent_fileContent_'>
                      <img
                        referrerPolicy='origin-when-cross-origin'
                        src={`https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                          post.resizedFilePath
                        )}`}
                        alt='imgPosting'
                      />
                    </div>
                  )
                ) : (
                  <div className='div_postUnit_mainContent_fileContent_'>
                    <video
                      src={`https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                        post.filePath
                      )}`}
                      style={{ display: 'block' }}
                      controls
                    ></video>
                  </div>
                )}
              </span>
              <span onClick={showModal}>
                {post.filePathsArr.length > 1 && (
                  <div
                    className={
                      displayFilePathsArr.length < 1
                        ? 'div_postImgRow1_3'
                        : displayFilePathsArr.length == 1
                        ? 'div_prevImgRow1_1'
                        : 'div_postImgRow1_2'
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
                          : `https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                              displayFilePathsArr[0]
                            )}`
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
                          : `https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                              displayFilePathsArr[1]
                            )}`
                      }
                      // src={`https://www.ftclone.com/${Thumbnail}`}
                      alt='displayThumbnails'
                    />
                    {/* )} */}
                  </div>
                )}
              </span>
              <span onClick={showModal}>
                {post.filePathsArr.length > 1 && (
                  // {ResizedFilePath !== '' && (
                  <div
                    className={
                      displayFilePathsArr.length <= 2
                        ? 'div_previmgRow2_1'
                        : 'div_postimgRow2_2'
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
                          : `https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                              displayFilePathsArr[2]
                            )}`
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
                          : `https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                              displayFilePathsArr[3]
                            )}`
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
                            : `https://myawsbucket-mern-test.s3.ap-northeast-2.amazonaws.com/${encodeURI(
                                displayFilePathsArr[4]
                              )}`
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
              </span>
            </div>
          </div>
          <div className='div_postUnit_CommentsAndLikes'>
            <div className='div_postUnit_CommentsAndLikes__'>
              <div
                style={{
                  borderBottom: '1px solid #ced0d4',
                  marginLeft: '16px',
                  marginRight: '16px',
                }}
              >
                <div className='div_postUnit_CommentsAndLikes_info'>
                  <div className='div_postUnit_CommentsAndLikes_info_likeCount'>
                    <span>
                      <LikeTwoTone /> {ThisPostLikeList.length}{' '}
                    </span>
                  </div>
                  {/* <LikeCount post={post} ThisPostLikeList={ThisPostLikeList} isLike = {isLike} postId = {post._id}/> */}

                  <div className='div_postUnit_CommentsAndLikes_info_commentCount'>
                    <span> {`댓글  ${ThisPostCommentList.length}회`} </span>
                  </div>
                </div>
              </div>
              <div style={{ height: '36px' }}>
                <div className='div_postUnit_CommentsAndLikes_participate'>
                  {/* <Like post={post} ThisPostLikeList={ThisPostLikeList} user={user} postId = {post._id} userId = {user.userData._id}/> */}
                  <div className='div_postUnit_CommentsAndLikes_participate_addLike'>
                    <span
                      onClick={() => {
                        clickLike(post);
                      }}
                    >
                      {isthisUserthisPostLike ? (
                        <LikeFilled />
                      ) : (
                        <LikeOutlined />
                      )}
                      좋아요
                    </span>
                  </div>

                  <div className='div_postUnit_CommentsAndLikes_participate_addComment'>
                    <span
                      onClick={() => {
                        commentOpenHandler(post._id);
                      }}
                    >
                      <MessageOutlined /> 댓글 달기
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {CommentOpenPosts.includes(post._id) && (
            <Comment
              ThisPostCommentList={ThisPostCommentList}
              commentMenus={commentMenus}
              post={post}
              user={user}
              postId={post._id}
              userId={user.userData._id}
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <div className='div_rootContainer'>
      <div className='div_space' style={{ backgroundColor: '#f0f2f5' }}></div>
      <div className='div_subRootContainer'>
        {/* the left navigation section */}
        <Navigation />

        {/* the middle main section */}
        <div role='main' className='div_mainContainer'>
          {/* Upload Area */}

          {user.userData.isAuth && <Upload posts={Posts} />}

          {renderPosts}
        </div>

        {/* the right complementary section */}
        <Complementary />
      </div>
      {/* <Logo /> */}
    </div>
  );
}

export default withRouter(LandingPage);
