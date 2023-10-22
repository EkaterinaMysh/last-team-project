const SET_FILES = "SET_FILES"
const UPD_FILES = "UPD_FILES"

const defaultState = {
    type:false,
    home:[],
    last_home:[],
    feed:[],
    last_feed:[]
}

export default function fileReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_FILES:
            return {
                ...state,
                type: false,
                home: action.home,
                last_home: action.last_home,
                feed: action.feed,
                last_feed: action.last_feed
            }
        case UPD_FILES:
            return {
                ...state,
                type: true,
                home: action.home,
                last_home: action.last_home,
                feed: action.feed,
                last_feed: action.last_feed
            }
        default:
            return state
    }
}

export const setPost = (files) => ({
    type: SET_FILES,
    payload: files
})
export const updFiles = (dat, swe, par, spe, tex, pw, vol) => ({
    type: UPD_FILES,
    date: dat,
    swear:swe,
    parasit:par,
    speed: spe,
    text: tex,
    profw:pw,
    vol:vol
})
