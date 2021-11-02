import { EllipsisOutlined, LikeTwoTone } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReplyComment from './ReplyComment';
import * as dateFns from 'date-fns';
import { Menu, Dropdown, Button, Space } from 'antd';

function SingleComment(props) {
  const user = useSelector((state) => state.user);
  const [isCommentLike, setisCommentLike] = useState(false);
  const [LikesList, setLikesList] = useState([]);
  const [IsReplyOpen, setIsReplyOpen] = useState(false);
  const [isThisUserThisCommentLike, setisThisUserThisCommentLike] = useState(0);
  const [isLikeOrUnLiked, setisLikeOrUnLiked] = useState(false);
  const [isCommented, setisCommented] = useState(false);

  useEffect(() => {
    const submitData = {
      // userId: user.userData._id,
      commentId: props.comment._id,
    };
    console.log(props.comment);
    Axios.post('/api/like/getLikes', submitData).then((response) => {
      if (response.data.success) {
        setLikesList(response.data.likeList);
        console.log('댓글의 좋아요 목록 가져오기에 성공했습니다.');
      } else {
        alert('Failed to get likes');
      }
    });
  }, [isLikeOrUnLiked, isCommented]);

  const onCommentLike = () => {
    console.log(
      '댓글에 좋아요를 등록합니다. 좋아요를 등록하는 유저의 아이디는' +
        user.userData._id +
        '이 댓글의 아이디는' +
        props.comment._id +
        '이 댓글이 속한 게시글의 아이디는' +
        props.postId
    );
    var submitData = {
      userId: user.userData._id,
      postId: props.postId,
      commentId: props.comment._id,
    };
    let isLike = 0;

    Axios.post('/api/like/getLikeState', submitData)
      .then((response) => {
        if (response.data.success) {
          alert(
            '유저가 이 댓글에 좋아요를 등록했습니까?  ' + response.data.isLike
          );
          setisCommentLike(Boolean(response.data.isLike));
          isLike = response.data.isLike;
        } else {
          alert('fail to get the Like State');
        }
      })
      .then((response) => {
        if (!isLike) {
          Axios.post('/api/like/upLike', submitData).then((response) => {
            if (response.data.success) {
              setLikesList(LikesList.push(response.data.likeResult));
              alert('댓글에 좋아요를 등록합니다.');
              setisLikeOrUnLiked(!isLikeOrUnLiked);
            } else {
              alert('Failed to change the Like state');
            }
          });
        } else {
          Axios.post('/api/like/unLike', submitData).then((response) => {
            if (response.data.success) {
              alert('좋아요를 취소합니다.');
              setisLikeOrUnLiked(!isLikeOrUnLiked);
            } else {
              alert('Failed to change the Like state');
            }
          });
        }
      });
  };

  const onReplyOpen = (comment) => {
    setIsReplyOpen(!IsReplyOpen);

    const submitData = {
      writer: user.userData._id,
      postId: comment.postId._id,
      responseTo: comment.writer._id,
      content: comment.content,
    };

    Axios.post('/api/comments/ReplyComment', submitData).then((response) => {
      if (response.data.success) {
        alert('답글이 성공적으로 등록되었습니다.');
        setisCommented(!isCommented);
      } else {
        alert('Failed to save the reply comment');
      }
    });
  };

  const commentMenus = (
    <Menu key='mn'>
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

  return (
    <div>
      <li style={{ listStyleType: 'none', textAlign: 'match-parent' }}>
        <div className='div_postUnit_ViewAndAddComments_Comment'>
          <div className='div_postUnit_ViewAndAddComments_Comment_Avatar'>
            <Avatar
              src={
                'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E'
              }
            ></Avatar>
          </div>
          <div className='div_postUnit_ViewAndAddComments_Comment_content'>
            <div className='div_postUnit_ViewAndAddComments_Comment_content_inner'>
              <div className='div_postUnit_ViewAndAddComments_Comment_content_'>
                <div className='div_postUnit_ViewAndAddComments_Comment_content__'>
                  <div className='div_postUnit_ViewAndAddComments_Comment_content__userId'>
                    <span>
                      {props.comment.writer && props.comment.writer.user_name}
                    </span>
                  </div>
                  <div className='div_postUnit_ViewAndAddComments_Comment_content__text'>
                    <span>{props.comment.content}</span>
                  </div>
                </div>
              </div>
              <div className='div_postUnit_ViewAndAddComments_Comment_content_ext'>
                <span>
                  <div>
                    <Space wrap style={{ width: '36px', height: '36px' }}>
                      <Dropdown
                        trigger='click'
                        overlay={props.commentMenus}
                        placement='bottomCenter'
                      >
                        <React.Fragment>
                          <Button
                            key='btn'
                            trigger='click'
                            style={{
                              color: 'black',
                              borderRadius: '50%',
                              padding: '4px 8px',
                            }}
                          >
                            <EllipsisOutlined
                              style={{
                                fontWeight: '600',
                                fontSize: '1.2375rem',
                                cursor: 'pointer',
                              }}
                            />
                          </Button>
                        </React.Fragment>
                      </Dropdown>
                    </Space>
                  </div>
                </span>
              </div>
            </div>
            <ul style={{ maxWidth: '75%' }}>
              <li>
                <span onClick={() => onCommentLike(props.comment)}>
                  <div className='div_postUnit_ViewAndAddComments_Comment_content_ulLike'>
                    좋아요
                  </div>
                </span>
              </li>
              <li>
                <span onClick={() => onReplyOpen(props.comment)}>
                  <span style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                    ∙
                  </span>
                  <div className='div_postUnit_ViewAndAddComments_Comment_content_ulReply'>
                    답글 달기
                  </div>
                </span>
              </li>
              <li>
                <span style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                  ∙
                </span>
                <div className='div_postUnit_ViewAndAddComments_Comment_content_ulDate'>
                  {/* the elapsed time have to be added.. */}
                  {dateFns.differenceInWeeks(
                    new Date(),
                    new Date(props.comment.createdAt)
                  )
                    ? dateFns.differenceInWeeks(
                        new Date(),
                        new Date(props.comment.createdAt)
                      ) + '주'
                    : dateFns.differenceInDays(
                        new Date(),
                        new Date(props.comment.createdAt)
                      )
                    ? dateFns.differenceInDays(
                        new Date(),
                        new Date(props.comment.createdAt)
                      ) + '일'
                    : dateFns.differenceInHours(
                        new Date(),
                        new Date(props.comment.createdAt)
                      )
                    ? dateFns.differenceInHours(
                        new Date(),
                        new Date(props.comment.createdAt)
                      ) + '시간'
                    : dateFns.differenceInMinutes(
                        new Date(),
                        new Date(props.comment.createdAt)
                      )
                    ? dateFns.differenceInMinutes(
                        new Date(),
                        new Date(props.comment.createdAt)
                      ) + '분'
                    : dateFns.differenceInSeconds(
                        new Date(),
                        new Date(props.comment.createdAt)
                      ) + '초'}
                </div>
              </li>
              <li id='li_postUnit_ViewAndAddComments_Comment_content_ulLikeCount'>
                <span style={{ display: 'flex', flexDirection: 'row' }}>
                  <span
                    style={{ paddingLeft: '4px', paddingRight: '4px' }}
                  ></span>
                  <div className='div_postUnit_ViewAndAddComments_Comment_content_ulLikeCount'>
                    {LikesList.length ? <LikeTwoTone /> : ''}
                    {LikesList.length ? LikesList.length : ''}
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='div_postUnit_ViewAndAddComments_moreComments'>
          {IsReplyOpen && (
            <ReplyComment
              ThisPostCommentList={props.ThisPostCommentList}
              postId={props.postId}
              parentComment={props.comment}
              commentMenus={props.commentMenus}
            />
          )}
        </div>
      </li>
    </div>
  );
}

export default withRouter(SingleComment);
