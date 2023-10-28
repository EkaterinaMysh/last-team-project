import {getInfoCurUs} from "../actions/user";

const SET_USER = "SET_USER"
const SET_CUR_USER = "SET_CUR_USER"
const SET_AUTH = "SET_AUTH"
const SET_CREATE = "SET_CREATE"
const CREAT_USER = "CREAT_USER"
const LOGOUT = "LOGOUT"
const SET_BALANCE = "SET_BALANCE"
const SET_POST_LEFT = "SET_POST_LEFT"



const defaultState = {
    currentUser: (localStorage.getItem('token')!=null)
        ? localStorage.getItem('user')
        :
        {}
    ,
    name: [],
    number: [],
    email: [],
    level: [],
    followers: [],
    followers_list: [],
    following: [],
    following_list: [],
    balanceA: [],
    balanceB: [],
    left: [],
    count: 0,
    //isAuth: (localStorage.getItem('token')!=null),
    isAuth: false,
    isCreate: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                name: action.name,
                number: action.number,
                email: action.email,
                level: action.level,
                followers: action.followers,
                followers_list: action.followers_list,
                following: action.following,
                following_list: action.following_list,
                isAuth: true
            }
        case SET_CUR_USER:
            return {
                ...state,
                currentUser: action.user,
                name: action.name,
                number: action.number,
                email: action.email,
                level: action.level,
                followers: action.followers,
                followers_list: action.followers_list,
                following: action.following,
                following_list: action.following_list,
                isAuth: true
            }
        case SET_AUTH:
            return {
                ...state,
                currentUser: action.user,
                isAuth: true
            }
        case SET_CREATE:
            return {
                ...state,
                currentUser: action.user,
                isCreate: true
            }
        case CREAT_USER:
            return {
                ...state,
                currentUser: action.user,
                name: action.name,
                number: action.number,
                email: action.email,
                isCreate: true
            }

        case SET_POST_LEFT:
            return {
                ...state,
                left: action.left
            }
        case SET_BALANCE:
            return {
                ...state,
                balanceA: action.balanceA,
                balanceB: action.balanceB
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false,
                isCreate: false
            }
        default:
            return state
    }
}

export const setUser = (login, name, number, email, level, followers,followers_list, following, following_list) => ({
    type: SET_USER,
    user: login,
    name: name,
    number: number,
    email: email,
    followers: followers,
    followers_list: followers_list,
    following: following,
    following_list: following_list,
    level: level,
    isAuth: true})

export const setAuth = (login) => ({
    type: SET_AUTH,
    user: login,
    isAuth: true})

export const setBalance = (A, B) => ({
    type: SET_BALANCE,
    balanceA: A,
    balanceB: B
})

export const setLeftPost = (left) => ({
    type: SET_POST_LEFT,
    left: left
})


export const setCreate = (login) => ({
    type: SET_CREATE,
    user: login,
    isCreate: true})
export const createUser = (login, name, number, email) => ({
    type: CREAT_USER,
    user: login,
    name: name,
    number: number,
    email: email,
    isCreate: true
})

export const setCurUser = (login, name, number, email, level, followers,followers_list, following, following_list) => ({
    type: SET_CUR_USER,
    user: login,
    name: name,
    number: number,
    email: email,
    followers: followers,
    followers_list: followers_list,
    following: following,
    following_list: following_list,
    level: level,
    isAuth: true})



export const logout = () => ({type: LOGOUT})