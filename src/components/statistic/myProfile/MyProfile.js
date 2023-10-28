import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import './MyProfile.css'
import PostList from "../postLine/PostList";
import {setUser} from "../../../reducers/userReducer";
import {getInfo, getInfoCurUs, RaiseLevel,handlePointerEnterFol, DeleteUser} from "../../../actions/user";
import {getExecUsersPost, getUsersPost} from "../../../actions/stat";
import {NavLink, withRouter} from "react-router-dom";
import {setPostExec, setPostNotExec} from "../../../reducers/postReducer";

const MyProfile = () => {
    const dispatch = useDispatch()

    let count = useSelector(state => state.post.execute_post)
    //alert(4)

    useEffect(()=> {
        let login = window.location.pathname
        login = login.slice(6)
        dispatch(getInfoCurUs(login))

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
    const following_list = useSelector(state => state.user.following_list)
    //const login = useSelector(state => state.user.currentUser)
    const followers_list = useSelector(state => state.user.followers_list)
    const number = useSelector(state => state.user.number)
    const email = useSelector(state => state.user.email)
    const followers = useSelector(state => state.user.followers)
    const following = useSelector(state => state.user.following)
    const level = useSelector(state => state.user.level)
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

                        <div className="user_inf">
                            <p>Возможные действия:</p>
                            <div className=''>
                            <button id="follow-btn" type='submit' className='fl__wi' onClick={() =>  {
                                //let login = window.location.pathname
                                //login = login.slice(7)
                                //alert(login)
                                dispatch(RaiseLevel())
                            }
                            }>Поднять уровень</button>
                            </div>
                            <div className=''>
                            <button id="delete-btn" type='submit' className='fl__wi' onClick={() =>  {
                                //let login = window.location.pathname
                                //login = login.slice(7)
                                //alert(login)
                                dispatch(DeleteUser())
                            }
                            }>Удалить аккаунт</button>
                            </div>
                            <div className=''>
                                <NavLink to="/write_request" className="write_req_lk"><p className="write_req">Написать поручение</p></NavLink>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {!count &&
                <div>
                    <div className="">
                        <div className=''>
                            <button  className='fl__wi btn__mypr' onClick={() =>  dispatch(setPostExec())}>Взятые поручения</button>
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
                            <button className='fl__wi  btn__mypr'  onClick={() => dispatch(setPostNotExec())}>Поручения пользователя</button>
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