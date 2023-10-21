import React from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";
import Logo from "../../../assets/img/logo_main.png";
import {logout} from "../../../reducers/userReducer";
import Person from "../../../assets/img/person.png";
import {useDispatch,useSelector} from "react-redux";
const Navbar = () => {
    const dispatch = useDispatch()
    const nameP = '/user/'+useSelector(state => state.user.currentUser)
    return (
        <div className="main__toolbar">
            <img src={Logo} alt="" className="main__logo" />
            <div className='main__toolbar__menu'>
                <div className={"navbar__home"}>
                    <NavLink to="/home">Home</NavLink>
                </div>
                <div className={"navbar__feed"}>
                    <NavLink to="/feed">Feed</NavLink>
                </div>
                <div className={"navbar__user"}>
                    <NavLink to={nameP}>My Profile</NavLink>
                </div>
                <button className="logout__btn" onClick={() => dispatch(logout())}>
                    Logout
                </button>

            </div>
            <div className='main__toolbar__user'>

            </div>


        </div>

    );
};

export default Navbar;