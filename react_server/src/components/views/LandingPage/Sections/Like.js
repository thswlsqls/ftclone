import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { useSelector } from 'react-redux';


function Like(props) {

    const user = useSelector(state => state.user)
    const [isLike, setisLike] = useState(false);

    useEffect(() => {

        setisLike(props.ThisPostLikeList.some(like => {
            like.userId._id = user.userData._id
        }))

        // console.log(props.ThisPostLikeList.some(like => {
        //     like.userId._id = user.userData._id
        // }))

    }, [isLike])
    

    
    const clickLike = () => {
        
        let submitData = { 
            postId: props.postId, 
            userId: props.userId
        };

        // Axios.post('/api/like/getLikeState', submitData)
        // .then(response => {
        //     if(response.data.success){
        //         console.log(response.data);
        //         setisLike(response.data.isLike);              
        //     } else {
        //         alert("getting the Like State failed");
        //     }
        // }).then(response => {
        //     if(!props.user.userData.isAuth){
        //         alert("로그인이 필요합니다.");
               
        //     } else {
                if (!isLike){
    
                    Axios.post('/api/like/upLike', submitData)
                    .then(response => {
                        if(response.data.success){
                        } else {
                            alert("Failed to change the Like state")
                        }
                    }).then(response=>{
                        setisLike(!isLike)
                    })
    
                } else {
    
                    Axios.post('/api/like/unLike', submitData)
                    .then(response => {
                        if(response.data.success){
                        } else {
                            alert("Failed to change the Like state")
                        }
                    }).then(response=>{
                        setisLike(!isLike)
                    })

                }
    
            // }
        // })

    };

    return (
        <div className="div_postUnit_CommentsAndLikes_participate_addLike">
            <span onClick={()=>{clickLike()}}>
                {isLike ? <LikeFilled /> : <LikeOutlined />}좋아요 
            </span>
        </div>
    )

}

export default Like
