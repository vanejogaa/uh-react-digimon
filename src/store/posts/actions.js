import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL
} from './actionTypes'

export function actionGetPosts(){
    return{
        type: GET_POSTS
    }
}

export function actionGetPostsOk(posts){
    return{
        type: GET_POSTS_OK,
        payload: posts,
    }
}

export function actionGetPostsFail(error){
    return{
        type: GET_POSTS_FAIL,
        payload: error,
    }
}

export function getPosts(){
    return async (dispatch)=>{
        dispatch(actionGetPosts())

        try{
            const response = await axios.get("https://digimon-api.vercel.app/api/digimon")
            dispatch(actionGetPostsOk(response.data))
        }catch(error){
            dispatch(actionGetPostsFail(error))
        }
    }
}