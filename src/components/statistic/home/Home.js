import React, {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
//import {getFiles, checkFile} from "../../../actions/stat";
import MyProfile from "./../myProfile/MyProfile";
import Load from "./../load/Load";

import {uploadFile} from "../../../actions/stat";
import {logout} from "../../../reducers/userReducer"
import './Main.css';
import Person from '../../../assets/img/person.png';
import Logo from "../../../assets/img/logo_main.png";
import PostList from "./../postLine/PostList";
import Navbar from "../navbar/Navbar"
import {NavLink} from "react-router-dom";
import {login} from "../../../actions/user";

const Home = () => {
    const dispatch = useDispatch()

    //const mess = useSelector(state => state.load.type)

    //useEffect(() => {
    //dispatch(setUser(localStorage.getItem('user')))
    //    dispatch(getFiles())
    //})

    //function fileUploadHandler(event) {
    //    const files = [...event.target.files]
    //    files.forEach(file => dispatch(uploadFile(file)))

    //}

    //const nameP = useSelector(state => state.user.currentUser)
    const nameP = 'admin'
    //const post = useSelector(state => state.home.posts)
    const [post, setPosts]=useState([
        {id: 1, mail: '@@@@@', title: 'Java Script', body: 'a programming language', photo: ''},
        {id: 2, mail: '@@@@@', title: 'Python', body: 'a programming language', photo: ''},
        {id: 3, mail: '@@@@@', title: 'C++', body: 'a programming language', photo: ''},
        {id: 4, mail: '@@@@@', title: 'C', body: 'a programming language', photo: ''},
        {id: 5, mail: '@@@@@', title: 'C#', body: 'a programming language', photo: ''}
    ]);
    return (

            <div className="main__screen">

                <div className="main">
                    <div className="main__content">
                        <PostList post={post} title="Recent home posts"/>
                    </div>
                    <footer className="main__footer">
                        <div className="main__footer__content">
                            Рябеево, Тверская обл., 170524
                        </div>
                    </footer>
                </div>
            </div>

    );

}

export default Home;