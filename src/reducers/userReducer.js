const SET_USER = "SET_USER"
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
    isAuth: (localStorage.getItem('token')!=null),
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
        case CREAT_USER:
            return {
                ...state,
                currentUser: {},
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
export const createUser = () => ({type: CREAT_USER})
export const logout = () => ({type: LOGOUT})