import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import './UserProfile.css'
import PostList from "../postLine/PostList";
import {setUser} from "../../../reducers/userReducer";
import {getInfo} from "../../../actions/user";
import {getPost, getUsersPost} from "../../../actions/stat";
import {NavLink, withRouter} from "react-router-dom";

const UserProfile = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        let login= window.location.pathname
        login = login.slice(7)
        //alert(login)
        dispatch(getInfo(login))
        dispatch(getUsersPost(login))

    },[])

    const divStyle = {
        color: 'red',
        display: 'none'
    };
    const divError = {
        marginLeft: 'auto',
        marginRight: 'auto'
    };
    const post = useSelector(state => state.post.home)

    const name = useSelector(state => state.user.name)
    //const login = useSelector(state => state.user.currentUser)
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
                            <button id="follow-btn" type='submit' className='follow__btn'>Подписаться</button>

                        </div>
                    </div>
                    <div className="">
                        <div className=''>
                            <NavLink to="/userposts"><p>Взятые запросы</p></NavLink>

                        </div>
                    </div>
                </div>
            </div>

            <div className='row text-center'>
                <div className='col'>
                    <PostList post={post} title="Посты пользователя"/>
                </div>

            </div>



        </div>
    );

};


export default UserProfile;