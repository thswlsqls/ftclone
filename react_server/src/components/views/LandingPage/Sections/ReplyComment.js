import {
  CameraOutlined,
  GifOutlined,
  SmileOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import SingleComment from './SingleComment';

function ReplyComment(props) {
  const user = useSelector((state) => state.user);
  const [ThisPostCommentCount, setThisPostCommentCount] = useState(
    props.ThisPostCommentList.length
  );

  const [isCommentLike, setisCommentLike] = useState(false);
  const [LikesList, setLikesList] = useState([]);

  const [isCommented, setisCommented] = useState(false);

  useEffect(() => {
    const submitData = {
      userId: user.userData._id,
      commentId: props.parentComment._Id,
    };

    Axios.post('/api/like/getLikes', submitData).then((response) => {
      if (response.data.success) {
        setLikesList(response.data.likeList);
        // alert('the comment Like responded successfully');
      } else {
        alert('Failed to save the comment Like');
      }
    });
  }, [isCommented]);

  const RegisterComment = (e) => {
    var commentContent = document.getElementById(
      props.parentComment._id + 'replyCommentSpan'
    ).innerText;

    if (window.event.keyCode == 13) {
      let submitData = {
        content: commentContent,
        writer: user.userData._id,
        postId: props.postId,
        responseTo: props.parentComment._id,
      };

      Axios.post('/api/comment/saveComment', submitData).then((response) => {
        if (response.data.success) {
          alert('답글이 성공적으로 등록되었습니다.');
          setThisPostCommentCount(ThisPostCommentCount + 1);
          setisCommented(!isCommented);
          // setIsCommentListchanged(true);
          // props.refreshFunction(response.data.result)
        } else {
          alert('Failed to save Comment');
        }
      });

      document.getElementById(
        props.parentComment._id + 'replyCommentSpan'
      ).innerText = '댓글을 등록하세요...';
    }
  };

  return (
    <div style={{ minWidth: '100%' }}>
      {props.ThisPostCommentList.map((comment, index) => {
        console.log(comment);
        return (
          <div>
            {comment.responseTo && (
              <div
                style={{
                  float: 'left',
                  marginLeft: '36px',
                  marginRight: '0px',
                  width: '90%',
                }}
              >
                {comment.responseTo._id === props.parentComment._id && (
                  <SingleComment
                    key={`sc${comment._id}`}
                    parentComment={props.parentComment}
                    ThisPostCommentList={props.ThisPostCommentList}
                    postId={props.postId}
                    comment={comment}
                    commentMenus={props.commentMenus}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
      <div
        style={{
          float: 'left',
          marginLeft: '36px',
          marginRight: '0px',
          width: '90%',
        }}
      >
        <div className='div_postUnit_ViewAndAddComments_addCommentForm'>
          <div className='div_postUnit_ViewAndAddComments_addCommentForm_Avatar'>
            <Avatar
              src={
                'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E'
              }
            ></Avatar>
          </div>
          <div className='div_postUnit_ViewAndAddComments_addCommentForm_inputForm'>
            <div className='div_postUnit_ViewAndAddComments_addCommentForm_inputForm_textForm'>
              <form type='submit' onKeyPress={() => RegisterComment()}>
                <div className='div_postUnit_ViewAndAddComments_addCommentForm_inputForm_textForm_formDiv'>
                  <span id={`${props.parentComment._id}replyCommentSpan`}>
                    댓글을 입력하세요...
                  </span>
                </div>
                {/* <ul>
                  <li>
                    <span>
                      <SmileOutlined />
                    </span>
                  </li>
                  <li>
                    <span>
                      <CameraOutlined />
                    </span>
                  </li>
                  <li>
                    <span>
                      <VideoCameraOutlined />
                    </span>
                  </li>
                  <li>
                    <span>
                      <GifOutlined />
                    </span>
                  </li>
                </ul> */}
              </form>
            </div>
            <div className='div_postUnit_ViewAndAddComments_addCommentForm_inputForm_info'>
              글을 게시하려면 Enter키를 누르세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ReplyComment);
