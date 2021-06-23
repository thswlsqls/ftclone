import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { LikeTwoTone } from '@ant-design/icons';

function LikeCount(props) {

    const [LikeCount, setLikeCount] = useState(0);

    useEffect((e) => {

        // setLikeCount(props.ThisPostLikeList.length)

        var submitData = { 
            postId: props.postId,
            // userId: props.userId
         }

        Axios.post('/api/like/getLikeCount', submitData)
            .then(response => {
                if(response.data.success) {
                    setLikeCount(response.data.LikeCount);
                } else {
                    alert('Failed to get likes')
                }
            })

    }, []);
    
    return (
        <div className="div_postUnit_CommentsAndLikes_info_likeCount">
            <span><LikeTwoTone /> {props.ThisPostLikeList.length} </span>
        </div>
    )
}

export default LikeCount
