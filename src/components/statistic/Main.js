import React, {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {getFiles, checkFile} from "../../actions/stat";
import MyProfile from "./myProfile/MyProfile";
import Load from "./load/Load";

import {uploadFile} from "../../actions/stat";
import {logout, setUser} from "../../reducers/userReducer"
import './Main.css';
import Person from '../../assets/img/person.png';
import Logo from "../../assets/img/logo_main.png";
import PostList from "./postLine/PostList";
import {NavLink} from "react-router-dom";
import {login} from "../../actions/user";
import NavbarReg from "../navbarReg/NavbarReg";
import Registration from "../registration/Registration";
import Home from "./home/Home"
import Login from "../registration/Login";
import Navbar from "./navbar/Navbar";
import Feed from "./feed/Feed";

const Main = () => {
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

    useEffect(()=>{
        dispatch(setUser('admin','anna','111','mail','3','4'))
    })

    const nameP = '/'+useSelector(state => state.user.currentUser)
    //const nameP = setUser('admin')
    //const post = useSelector(state => state.home.posts)
    const [post, setPosts]=useState([
        {id: 1, mail: '@@@@@', title: 'Java Script', body: 'a programming language', photo: ''},
        {id: 2, mail: '@@@@@', title: 'Python', body: 'a programming language', photo: ''},
        {id: 3, mail: '@@@@@', title: 'C++', body: 'a programming language', photo: ''},
        {id: 4, mail: '@@@@@', title: 'C', body: 'a programming language', photo: ''},
        {id: 5, mail: '@@@@@', title: 'C#', body: 'a programming language', photo: ''}
    ]);
    return (

        <BrowserRouter>


                <div className={"container"}>


                    <div className='app'>
                        <Navbar/>

                        <div className="wrap">
                            <Switch>
                                <Route path="/home" component={Home}/>
                                <Route path="/feed" component={Feed}/>
                                <Route path={nameP} component={MyProfile}/>
                                <Redirect to='/home'/>
                            </Switch>

                        </div>
                    </div>

                </div>



        </BrowserRouter>

    );

}

export default Main;