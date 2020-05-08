import {RECEIVE_DATA} from '../actions/shared'
import {ADD_POST, REMOVE_POST} from '../actions/posts'
export default function posts(state={}, action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.posts
            }
        case ADD_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case REMOVE_POST:
            const newState = Object.values(state).filter((it)=> it.id != action.post.id)
            const s = {}
            newState.forEach(it=>{
                s[it.id] = it
            })
            return s
            
        default:
            return state
    }
}

