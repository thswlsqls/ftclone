
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { auth } from '../REDUX_actions/user_actions'
import { withRouter } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(SpecificComponent, option, adminRoute = null){
    //null 아무나 출입가능
    //true 로그인한 유저만 출입가능
    //false 로그인한 유저만 출입불가능
    function AuthenticationCheck(props){

    let user = useSelector(state => state.user);
    const dispatch = useDispatch();

        useEffect(() => {
            
            dispatch(auth()).then(response => {
                    //로그인하지 않은 상태
                    if(!response.payload.isAuth){
                        if(option){
                            alert('로그인이 필요한 페이지입니다.');
                            props.history.push('/login');
                        }
                    }else{ //로그인한 상태
                        if(adminRoute && !response.payload.isAdmin){
                            props.history.push('/');
                        }else{
                            if(option===false){
                                alert("로그인한 유저는 접근할 수 없는 페이지입니다.");
                                props.history.push('/');
                            }
                        }
                    }
            })

        }, [])

        return(
            <SpecificComponent {...props} user={user}/>
        )
    }
    return AuthenticationCheck
}