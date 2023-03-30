import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL
} from './actionTypes'

const initialState = {
    posts: [],
    loadingPosts: false,
    error: {
        message: ""
    }
}

export default function PostsReducer(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            state = {...state, loadingPosts: true}
            break

        case GET_POSTS_OK:
            state = {...state, loadingPosts: false, posts: action.payload}
             break

        case GET_POSTS_FAIL:
            state = {...state, loadingPosts: false, posts: [], error: {message: action.payload}}
            break     

        default:
            break
    }

    return state
}