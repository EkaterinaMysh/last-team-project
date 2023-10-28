const SET_POST = "SET_POST"
const SET_FEED = "SET_FEED"
const UPD_POST = "UPD_POST"
const SET_EXEC = "SET_EXEC"
const SET_NOTEXEC = "SET_NOTEXEC"


const defaultState = {
    type:false,
    home:[],
    last_home:[],
    feed:[],
    last_feed:[],
    execute_post: false
}

export default function postReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_POST:
            return {...state,
                type: true,
                home: action.payload
            }
        case SET_FEED:
            return {...state,
                type: true,
                feed: action.payload
            }
        case SET_EXEC:
            return {...state,
                execute_post: true
            }
        case SET_NOTEXEC:
            return {...state,
                execute_post: false
            }
        case UPD_POST:
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
    type: SET_POST,
    payload: files
})


export const setPostExec = () => ({
    type: SET_EXEC
})

export const setPostNotExec = () => ({
    type: SET_NOTEXEC
})

export const setPostFeed = (files) => ({
    type: SET_FEED,
    payload: files
})
export const updPost = () => ({
    type: UPD_POST
})
