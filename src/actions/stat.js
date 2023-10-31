import axios from 'axios'
import {setFiles} from "../reducers/fileReducer";
import jwt_decode from "jwt-decode";
import getBrowserFingerprint from "get-browser-fingerprint";
import {beginLoad, endLoad, inLoad, closeLoad} from "../reducers/loadReducer";
import {setPost} from "../reducers/postReducer";
import {setBalance, setLeftPost} from "../reducers/userReducer";

const domen='http://178.154.244.134:8080'

export function exp_token(){
    let token = localStorage.getItem('token');
    let decodedToken = jwt_decode(token);
    console.log("Decoded Token", decodedToken);
    let currentDate = new Date();

    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        const fingerprint = getBrowserFingerprint();
        const refresh = axios.post(domen+'/users/refresh', {
            "fingerprint":fingerprint},{ withCredentials: true
        })
        localStorage.setItem('token', refresh.data.jwtToken);
    }
}



export function getUsersPost(login) {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwt_decode(token);
            console.log("Decoded Token", decodedToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                const fingerprint = getBrowserFingerprint();
                const refresh = await axios.post(domen+'/users/refresh', {
                    "fingerprint":fingerprint},{ withCredentials: true
                })
                localStorage.setItem('token', refresh.data.jwtToken);
            }
            const response = await axios.get(domen+'/show_own_offers/'+login, {
                headers: {'x-access-token': `${localStorage.getItem('token')}`}
            })

            //alert(response.oldData)
            //alert("ok")

            dispatch(setPost(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function getFollowingsPost() {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwt_decode(token);
            console.log("Decoded Token", decodedToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                const fingerprint = getBrowserFingerprint();
                const refresh = await axios.post(domen+'/users/refresh', {
                    "fingerprint":fingerprint},{ withCredentials: true
                })
                localStorage.setItem('token', refresh.data.jwtToken);
            }
            const response = await axios.get(domen+'/show_subscribes_posts', {
                headers: {'x-access-token': `${localStorage.getItem('token')}`}
            })

            dispatch(setPost(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function getLeftPost() {
    return async dispatch => {
        try {

            const response = await axios.get(domen+'/posts_left', {
                headers: {'x-access-token': `${localStorage.getItem('token')}`}
            })

           // alert(response.data)
           // alert("ok")

            dispatch(setLeftPost(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function getExecUsersPost(login) {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwt_decode(token);
            console.log("Decoded Token", decodedToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                const fingerprint = getBrowserFingerprint();
                const refresh = await axios.post(domen+'/users/refresh', {
                    "fingerprint":fingerprint},{ withCredentials: true
                })
                localStorage.setItem('token', refresh.data.jwtToken);
            }
            const response = await axios.get(domen+'/show_executor_offers/'+login, {
                headers: {'x-access-token': `${localStorage.getItem('token')}`}
            })

            //alert(response.oldData)
            //alert("ok")

            dispatch(setPost(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function getPost() {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwt_decode(token);
            console.log("Decoded Token", decodedToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                const fingerprint = getBrowserFingerprint();
                const refresh = await axios.post(domen+'/users/refresh', {
                    "fingerprint":fingerprint},{ withCredentials: true
                })
                localStorage.setItem('token', refresh.data.jwtToken);
            }
            const response = await axios.get(domen+'/show_offers', {
                headers: {'x-access-token': `${localStorage.getItem('token')}`}
            })

            //alert(response.oldData)
            //alert("ok")
            console.log("Decoded Token", response.data);
            //alert(response[0].title)
            //alert(response)

            dispatch(setPost(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function getBalance(login) {
    return async dispatch => {
        try {
            let token = localStorage.getItem('token');
            let decodedToken = jwt_decode(token);
            console.log("Decoded Token", decodedToken);
            let currentDate = new Date();

            // JWT exp is in seconds
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
                const fingerprint = getBrowserFingerprint();
                const refresh = await axios.post(domen+'/users/refresh', {
                    "fingerprint":fingerprint},{ withCredentials: true
                })
                localStorage.setItem('token', refresh.data.jwtToken);
            }
            const response = await axios.get(domen+'/get_user_balance/'+ login, {
                headers: {'x-access-token': `${localStorage.getItem('token')}`}
            })

            //alert(response.oldData)
            //alert("ok balance ")
            //console.log("Decoded Token", response.data);
            //alert(response[0].title)
            //alert(response.data)
            dispatch(setBalance(response.data.balanceA, response.data.balanceB))

        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

