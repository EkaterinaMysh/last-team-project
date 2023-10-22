const SET_USER = "SET_USER"
const SET_AUTH = "SET_AUTH"
const SET_CREATE = "SET_CREATE"
const CREAT_USER = "CREAT_USER"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: (localStorage.getItem('token')!=null)
        ? localStorage.getItem('user')
        :
        {}
    ,
    name: [],
    number: [],
    email: [],
    followers: [],
    following: [],
    //isAuth: (localStorage.getItem('token')!=null),
    isAuth: false,
    isCreate: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.user,
                name: action.name,
                number: action.number,
                email: action.email,
                followers: action.followers,
                following: action.following,
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
                ...state,currentUser: action.user,
                name: action.name,
                number: action.number,
                email: action.email,
                isCreate: true
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

export const setUser = (login, name, number, email, followers, following) => ({
    type: SET_USER,
    user: login,
    name: name,
    number: number,
    email: email,
    followers: followers,
    following: following,
    isAuth: true})

export const setAuth = (login) => ({
    type: SET_AUTH,
    user: login,
    isAuth: true})

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
export const logout = () => ({type: LOGOUT})