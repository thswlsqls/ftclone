import { CameraOutlined, EllipsisOutlined, GifOutlined, LikeTwoTone, SmileOutlined, VideoCameraOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios';
import SingleComment from './SingleComment'

const CommentDisplayOptions = [
    {value: "관련성 높은 댓글", label: "관련성 높은 댓글"},
    {value: "날짜 내림차순", label: "날짜 내림차순"},
    {value: "모든 댓글", label: "모든 댓글"}
]

function Comment(props) {

    const user = useSelector(state => state.user)
    const [ThisPostCommentCount, setThisPostCommentCount] = useState(0)
    const [isCommented, setisCommented] = useState(false)

    useEffect(() => {

        const submitData = {
            postId : props.postId
        }

        Axios.post('/api/comment/getThisPostComments', submitData)
            .then(response => {
                if (response.data.success) {
                    alert("CommentList responded successfully")
                    setThisPostCommentCount(response.data.ThisPostCommentLists.length)
            
                } else {
                    alert('Failed to save Comment')
                }                
            })  
            
    }, [isCommented])

    const RegisterComment = (e) => {

        var commentContent = document.getElementById("commentSpan").innerText;
        
        if(window.event.keyCode ==  13){

                let submitData = { 
                    content: commentContent,
                    postId: props.postId, 
                    writer: user.userData._id,
                };
    
                Axios.post('/api/comment/saveComment', submitData)
                .then(response => {
                    if(response.data.success){
                        alert("the Comment registerd succesfully");
                        setThisPostCommentCount(ThisPostCommentCount+1);
                        setisCommented(!isCommented)
                    } else {
                        alert('Failed to save Comment')
                    }
                })
                document.getElementById("commentSpan").innerText = "댓글을 등록하세요...";
        }
    }

    return (
        <div className="div_postUnit_ViewAndAddComments">
            <span >
                <div>

                </div>
            </span>
            <div className="div_postUnit_ViewAndAddComments_display">
                <div className="div_postUnit_ViewAndAddComments_display_">
                    <div className="div_postUnit_ViewAndAddComments_display__">
                         <span>
                             <select>
                                {CommentDisplayOptions.map((item, index) => (
                                                        <option key={index} value={`${item.value}`}>{item.label}</option>
                                ))}
                             </select>
                         </span>
                    </div>
                </div>
            </div>
            <div className="div_postUnit_ViewAndAddComments_addCommentForm">
                <div className="div_postUnit_ViewAndAddComments_addCommentForm_Avatar">
                    <Avatar src={"https://scontent-nrt1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84688533_170842440872810_7559275468982059008_n.jpg?_nc_cat=1&ccb=3&_nc_sid=7206a8&_nc_ohc=ucBZ3Qt1MvkAX_Bzo9K&_nc_ht=scontent-nrt1-1.xx&tp=27&oh=0c1968e06cbf7cd964e7d3784f83085f&oe=6064714E"}></Avatar>
                </div>
                <div className="div_postUnit_ViewAndAddComments_addCommentForm_inputForm">
                    <div className="div_postUnit_ViewAndAddComments_addCommentForm_inputForm_textForm">
                        <form type='submit' onKeyPress={()=>RegisterComment()}>
                            <div className="div_postUnit_ViewAndAddComments_addCommentForm_inputForm_textForm_formDiv">
                                <span id="commentSpan">
                                    댓글을 입력하세요...
                                </span>
                            </div>
                                <ul>
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
                            </ul>
                        </form>
                    </div>
                    <div className="div_postUnit_ViewAndAddComments_addCommentForm_inputForm_info">
                        글을 게시하려면 Enter키를 누르세요.
                    </div>
                </div>
            </div>
            {(props.ThisPostCommentList.length >0) &&
            <div>
                <ul style={{listStyleType:'none', margin: '0', padding: '0'}}>   
                    {props.ThisPostCommentList.map((comment, index)=>(
                        (comment.responseTo===undefined)&&
                        <SingleComment key={`sc${comment._id}`} ThisPostCommentList={props.ThisPostCommentList} postId={props.postId} comment={comment} />
                    ))}
                </ul> 
            </div>
            }
        </div>
    )
}

export default Comment
