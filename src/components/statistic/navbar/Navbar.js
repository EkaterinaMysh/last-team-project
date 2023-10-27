import React, {useEffect} from 'react';
import './Navbar.css'
import {NavLink} from "react-router-dom";
import Logo from "../../../assets/img/logo_main.png";
import {logout, setBalance} from "../../../reducers/userReducer";
import Person from "../../../assets/img/person.png";
import {useDispatch,useSelector} from "react-redux";
import {getBalance} from "../../../actions/stat";
import {getInfo} from "../../../actions/user";

const Navbar = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.user.currentUser)
    let log = window.location.pathname
    useEffect(() => {
        //dispatch(setUser(localStorage.getItem('user')))
        // dispatch(getInfo(login))
        dispatch(getBalance(login))

    }, [log])
    /**/
    const nameP = '/user/'+useSelector(state => state.user.currentUser)

    const coinsA = useSelector(state => state.user.balanceA)
    const coinsB = useSelector(state => state.user.balanceB)
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
            <div className='main__toolbar__money'>
                <p>A-coins:{coinsA} </p>
                <p>B-coins:{coinsB} </p>

            </div>


        </div>

    );
};

export default Navbar;