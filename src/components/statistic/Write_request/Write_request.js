import React, {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
//import {getFiles, checkFile} from "../../../actions/stat";
import MyProfile from "./../myProfile/MyProfile";
import Load from "./../load/Load";

import {uploadFile} from "../../../actions/stat";
import {logout} from "../../../reducers/userReducer"
import './Write_request.css';
import Person from '../../../assets/img/person.png';
import Logo from "../../../assets/img/logo_main.png";
import PostList from "./../postLine/PostList";
import Navbar from "../navbar/Navbar"
import {NavLink} from "react-router-dom";
import {login} from "../../../actions/user";

const Write_request = () => {
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

        <div className="main__screen_wr">

            <div className="main">

                <form className="form_for_request">
                    <p className="title_request">Ваше поручение</p>
                    <div className="text_request">
                        <textarea id="text" placeholder="Описание поручения" className="for_textarea" ></textarea>
                    </div>
                    <div className="coins">
                        <h4>Сколько А-монет будет списано за поручение?</h4>
                        <input type="number" id="coins" className="wr_coins"></input>
                    </div>
                </form>

                <footer className="main__footer">
                    <div className="main__footer__content">
                        Рябеево, Тверская обл., 170524
                    </div>
                </footer>
            </div>
        </div>

    );

}

export default Write_request;