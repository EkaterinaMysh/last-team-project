const SET_POST = "SET_POST"
const SET_FEED = "SET_FEED"
const UPD_POST = "UPD_POST"

const defaultState = {
    type:false,
    home:[],
    last_home:[],
    feed:[],
    last_feed:[]
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


export const setPostFeed = (files) => ({
    type: SET_FEED,
    payload: files
})
export const updPost = () => ({
    type: UPD_POST
})
