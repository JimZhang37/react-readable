import {RECEIVE_DATA, GET_POSTS_BY_CATEGORY_AND_CATEGORY} from '../actions/shared'


export default function categories(state={}, action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.categories
            }

        case GET_POSTS_BY_CATEGORY_AND_CATEGORY:
            return {
                ...state,
                ...action.categories
            }
        default:
            return state
    }
}