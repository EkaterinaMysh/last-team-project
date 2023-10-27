import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import './UserProfile.css'
import PostList from "../postLine/PostList";
import {setPostNotExec, setPostExec} from "../../../reducers/postReducer";
import {fa, getInfo, login, subscribe,unsubscribefrom, complete_offer} from "../../../actions/user";
import {getPost, getUsersPost, getExecUsersPost} from "../../../actions/stat";
import {NavLink, Redirect, withRouter} from "react-router-dom";

const UserProfile = () => {
    const dispatch = useDispatch()
    let count = useSelector(state => state.post.execute_post)
    const login_user = useSelector(state => state.user.currentUser)
    //alert(2)
    useEffect(()=>{
      //  alert(1)
        let login = window.location.pathname
        login = login.slice(7)
       // alert(count)
        dispatch(getInfo(login))
        if (count===false)
            dispatch(getUsersPost(login))
        else
            dispatch(getExecUsersPost(login))

    },[count])

    const divStyle = {
        color: 'red',
        display: 'none'
    };
    const divError = {
        marginLeft: 'auto',
        marginRight: 'auto'
    };
    let post = useSelector(state => state.post.home)

    const name = useSelector(state => state.user.name)

    const number = useSelector(state => state.user.number)
    const email = useSelector(state => state.user.email)
    const level = useSelector(state => state.user.level)
    const followers = useSelector(state => state.user.followers)
    const following = useSelector(state => state.user.following)
    return (
        <div className={"container__profile"}>
            <div className="thread-header border bg-light shadow">
                <div className='rowа text-center'>
                    <div className="col-sm">
                        <div>
                            <h1>
                                {name}
                            </h1>
                            <div className="">
                                <img src="/media/cat1.svg" width="350" height="350" alt=""></img>
                            </div>
                        </div>

                        <div className="user_inf">
                            <p>Информация о пользователе:</p>
                            <p>Уровень: {level}</p>

                            <p>Почта: {email}</p>
                            <p>Телефон: {number}</p>
                            <p>Подписчики: {followers}</p>
                            <p>Подписки: {following}</p>
                            <button id="follow-btn" type='submit' className='follow__btn' onClick={() =>  {
                                let login = window.location.pathname
                                login = login.slice(7)
                                //alert(login)
                                dispatch(subscribe(login))}
                            }>Подписаться</button>
                            <button id="follow-btn" type='submit' className='follow__btn' onClick={() =>  {
                                let login = window.location.pathname
                                login = login.slice(7)
                                //alert(login)
                                dispatch(unsubscribefrom(login))
                                }
                            }>Отписаться</button>

                        </div>
                    </div>

                </div>
            </div>
            {!count &&
                <div>
                    <div className="">
                    <div className=''>
                        <button  onClick={() =>  dispatch(setPostExec())}>Взятые поручения</button>
                    </div>
            </div>
            <div className='row text-center'>
                <div className='col'>
                    <PostList post={post} title="Посты пользователя"/>
                </div>

            </div>
                </div>
            }
            {
                count &&
                <div>
                    <div className="">
                        <div className=''>
                            <button  onClick={() => dispatch(setPostNotExec())}>Поручения пользователя</button>
                        </div>
                    </div>
                <div className='row text-center'>
                    <div className='col'>
                        <PostList post={post} title="Взятые запросы"/>
                    </div>

                </div>
                </div>
            }

        </div>
    );

};


export default UserProfile;