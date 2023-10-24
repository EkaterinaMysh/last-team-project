import axios from 'axios'
import {setUser,createUser,setAuth,setCreate} from "../reducers/userReducer";
import getBrowserFingerprint from "get-browser-fingerprint";
import jwt_decode from "jwt-decode";
import {setFiles} from "../reducers/fileReducer";

let timer = null;
const domen='http://192.168.7.185:8080'

function showError(message) {
    if (timer !== null) {
        // Clear previous timeout:
        clearTimeout(timer);
        timer = null;
    }
    let errorElement = document.getElementById("error");
    errorElement.innerHTML = message;
    errorElement.style.display = 'block';
    timer = setTimeout(function(){ errorElement.style.display = 'none'; }, 5000);
}

export const registration = (fio,login, password,number,email) => {
    return async dispatch => {try {
        const response = await axios.post(domen+'/register', {
            "password":password,"email":email,"login":login, 'name':fio,'phone_number':number
        })
        if(response.status===201) {
            dispatch(createUser(fio,login, number,email));

        } else {
            let errorMessage = response.data.message || 'Пользователь с таким именем или почтой уже существует';
            showError(errorMessage);
        }
    } catch (e) {
        let errorMessage = e.response.status+': Пользователь с таким именем или почтой уже существует';
        showError(errorMessage);
    }
}}

export const login =  (log, password) => {
    return async dispatch => {
        try {
            let result = log.indexOf("@")
            //alert(result)
            if (result===-1){
            const response = await axios.post(domen+'/login', {
                "login":log,"password":password
            })
                if(response.status===201) {
                    dispatch(setCreate())
                    localStorage.setItem('token', response.data.token)
                }
            } else {
                const response = await axios.post(domen+'/login', {
                    "email":log,"password":password
                })
                if(response.status===201) {
                    dispatch(setCreate())
                    localStorage.setItem('token', response.data.token)
                }
            }

        } catch (e) {
            alert(e.response.data.message)

        }
    }
}

export const send_post =  (title, descr, coins) => {
    return async dispatch => {
        try {
            console.log(typeof  Number(coins));
            alert('send')
            const response = await axios.post(domen+'/create_offer',
                {"title": title, "description": descr, "reward": Number(coins),
                headers: {'x-access-token': `${localStorage.getItem('token')}`
                }})
            alert('ok')
        } catch (e) {
            alert(e.response.data.message)

        }
    }
}

export const fa =  (log,password,token) => {
    return async dispatch => {
        try {
            const fingerprint = getBrowserFingerprint();
            dispatch(setAuth(login))
            let result = log.indexOf("@")
            //alert(result)
            if (result===-1){
            const response = await axios.post(domen+'/login/2fa',
                {"login":log, "code": token
            }
            )} else {
                const response = await axios.post(domen+'/login/2fa',
                    {"email":log, "code": token
                    }
                )}
            //alert(response)

            dispatch(setAuth(login))
            //alert('ok')

        } catch (e) {
            alert(e.response.data.message)
            //localStorage.removeItem('token')
        }
    }
}

export function getInfo(name) {
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
            const response = await axios.get(domen+'/get_user_info/'+name, {
                headers: {'x-access-token': `${localStorage.getItem('token')}`}
            })

            //alert(response.oldData)
            //alert("ok")
            dispatch(setUser(response.data.login, response.data.name, response.data.number,
                response.data.email, response.data.level, response.data.followers,
                response.data.following))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}