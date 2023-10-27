import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import './MyProfile.css'
import PostList from "../postLine/PostList";
import {setUser} from "../../../reducers/userReducer";
import {getInfo, getInfoCurUs, RaiseLevel,} from "../../../actions/user";
import {getExecUsersPost, getUsersPost} from "../../../actions/stat";
import {NavLink, withRouter} from "react-router-dom";
import {setPostExec, setPostNotExec} from "../../../reducers/postReducer";

const MyProfile = () => {
    const dispatch = useDispatch()

    let count = useSelector(state => state.post.execute_post)
    //alert(4)

    useEffect(()=> {
        //alert(3)
        let login = window.location.pathname
        //alert(1)
        login = login.slice(6)
        //alert(login)
        dispatch(getInfoCurUs(login))
        //alert(2)
        //dispatch(getInfo(login))
        //alert(count)
        if (count === false)
            dispatch(getUsersPost(login))
        else
            dispatch(getExecUsersPost(login))

    }, [count])

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
    const followers = useSelector(state => state.user.followers)
    const following = useSelector(state => state.user.following)
    const level = useSelector(state => state.user.level)

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
                            <button id="follow-btn" type='submit' className='follow__btn' onClick={() =>  {
                                //let login = window.location.pathname
                                //login = login.slice(7)
                                //alert(login)
                                dispatch(RaiseLevel())
                            }
                            }>+</button>
                            <p>Почта: {email}</p>
                            <p>Телефон: {number}</p>
                            <p>Подписчики: {followers}</p>
                            <p>Подписки: {following}</p>
                            <div className=''>
                                <NavLink to="/write_request"><p>Написать поручение</p></NavLink>

                            </div>

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


export default MyProfile;