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
       // alert(count)
        let login
        login = window.location.pathname
        login = login.slice(7)
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
    const following_list = useSelector(state => state.user.following_list)
    //const login = useSelector(state => state.user.currentUser)
    const followers_list = useSelector(state => state.user.followers_list)

    const number = useSelector(state => state.user.number)
    const email = useSelector(state => state.user.email)
    const level = useSelector(state => state.user.level)
    const followers = useSelector(state => state.user.followers)
    const following = useSelector(state => state.user.following)
    let sub
    if (followers!==0) {
        if (followers_list.includes(login_user)===true){
            sub = true
        } else sub = false

    } else sub = false
    //console.log(sub)
    const [showFollowersList, setShowFollowersList] = useState(false);
    const handleClick = () => {
        if (showFollowersList===false && followers!==0){
            setShowFollowersList(true);
        }
        else setShowFollowersList(false);

    };
    const [showFollowingList, setShowFollowingList] = useState(false);
    const handleClickIng = () => {
        if (showFollowingList===false && following!==0){
            setShowFollowingList(true);
        }
        else setShowFollowingList(false);

    };

    return (
        <div className={"container__profile"}>
            <div className="thread-header border bg-light shadow">
                <div className='rowа text-center'>
                    <div className="col-sm">
                        <div>
                            <div>
                                <h1>
                                    {name}
                                </h1>
                                <p>Информация о пользователе:</p>
                                <p>Уровень: {level}</p>
                                <p>Почта: {email}</p>
                                <p>Телефон: {number}</p>
                                <p onClick={handleClick}>Подписчики: {followers}</p>
                                {showFollowersList && followers_list }

                                <p onClick={handleClickIng}>Подписки: {following}</p>
                                {showFollowingList && following_list }
                            </div>

                        </div>

                        <div className="user_inf">
                            <p>Возможные действия:</p>

                            {(!sub)?
                                <button id="follow-btn" type='submit' className='follow__btn' onClick={() =>  {
                                let login = window.location.pathname
                                sub = false
                                    console.log(sub)
                                login = login.slice(7)
                                //alert(login)
                                dispatch(subscribe(login))}
                            }>Подписаться</button>
                                :
                                <button id="follow-btn" type='submit' className='follow__btn' onClick={() =>  {
                                let login = window.location.pathname
                                login = login.slice(7)
                                    console.log(sub)
                                    sub = true
                                //alert(login)
                                dispatch(unsubscribefrom(login))
                            }
                            }>Отписаться</button>

                            }



                        </div>
                    </div>

                </div>
            </div>
            {!count &&
                <div>
                    <div className="">
                    <div className=''>
                        <button className='fl__wi btn__mypr'  onClick={() =>  dispatch(setPostExec())}>Взятые поручения</button>
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
                            <button className='fl__wi btn__mypr' onClick={() => dispatch(setPostNotExec())}>Поручения пользователя</button>
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