import React, {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
//import {getFiles, checkFile} from "../../../actions/stat";
import MyProfile from "./../myProfile/MyProfile";
import Load from "./../load/Load";

import {getPost, uploadFile} from "../../../actions/stat";
import PostList from "./../postLine/PostList";
import {login} from "../../../actions/user";

const Feed = () => {
    const dispatch = useDispatch()


    //const mess = useSelector(state => state.load.type)

    //useEffect(() => {
    //dispatch(setUser(localStorage.getItem('user')))
        //dispatch(getFollowingsPost())
    //})

    //function fileUploadHandler(event) {
    //    const files = [...event.target.files]
    //    files.forEach(file => dispatch(uploadFile(file)))

    //}

    //const nameP = useSelector(state => state.user.currentUser)
    //const nameP = 'admin'
    //const post = useSelector(state => state.home.posts)

    return (

        <div className="main__screen">

            <div className="main">
                <div className="main__content">
                    <PostList  title="Recent feed posts"/>
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

export default Feed;