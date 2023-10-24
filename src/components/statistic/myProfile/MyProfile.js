import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import './MyProfile.css'
import PostList from "../postLine/PostList";
import {setUser} from "../../../reducers/userReducer";
import {getInfo} from "../../../actions/user";
import {getUsersPost} from "../../../actions/stat";
import {NavLink, withRouter} from "react-router-dom";

const MyProfile = () => {
    const dispatch = useDispatch()
    //const [email, setEmail] = useState("")
    //const [fio, setFio] = useState("")
    //const [number, setNumber] = useState("")
    //const [password, setPassword] = useState("")
    //const [login, setLogin] = useState("")
    //const dispatch = useDispatch()
    //const [token, setToken] = useState("")
    //const isCreate = useSelector(state => state.user.isCreate)

    //const login = useSelector(state => state.user.currentUser)


    useEffect(()=>{
        let login= window.location.pathname
        login = login.slice(6)
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
    /*const [post, setPosts]=useState([
        {id: 1, mail: '@@@@@', title: 'Java Script', body: 'a programming language', photo: ''},
        {id: 2, mail: '@@@@@', title: 'Python', body: 'a programming language', photo: ''},
        {id: 3, mail: '@@@@@', title: 'C++', body: 'a programming language', photo: ''},
        {id: 4, mail: '@@@@@', title: 'C', body: 'a programming language', photo: ''},
        {id: 5, mail: '@@@@@', title: 'C#', body: 'a programming language', photo: ''}
    ]);*/
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
                            <p>Почта: {email}</p>
                            <p>Телефон: {number}</p>
                            <p>Подписчики: {followers}</p>
                            <p>Подписки: {following}</p>
                            <button id="submit-btn" type='submit' className='submit__btn'>Написать поручение</button>
                            <div className=''>
                                <NavLink to="/write_request"><p>Написать поручение</p></NavLink>

                            </div>

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


export default MyProfile;