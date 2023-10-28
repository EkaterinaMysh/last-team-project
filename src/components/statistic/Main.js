import React, {useState,useRef,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {getFiles, checkFile} from "../../actions/stat";
import MyProfile from "./myProfile/MyProfile";
import UserPosts from "./UserProfile/UserProfilePosts";
import UserProfile from "./UserProfile/UserProfile";
import Write_request from "./Write_request/Write_request";
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
import { useActionData } from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch()


    useEffect(()=>{
        //dispatch(setUser('admin','anna','111','mail','3','4'))
    })

    const nameP = '/user/'+useSelector(state => state.user.currentUser)

    return (

        <BrowserRouter>


                <div className={"container"}>


                    <div className='app'>
                        <Navbar/>

                        <div className="wrap">
                            <Switch>
                                <Route path="/home" component={Home}/>
                                <Route path="/write_request" component={Write_request}/>
                                <Route path="/feed" component={Feed}/>
                                <Route path='/user/:userId' component={MyProfile}/>
                                <Route path='/users/:userId' component={UserProfile}/>
                                <Redirect to='/home'/>
                            </Switch>

                        </div>
                    </div>

                </div>



        </BrowserRouter>

    );

}

export default Main;