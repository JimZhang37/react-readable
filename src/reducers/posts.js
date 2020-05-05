

export default function posts(state={}, action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.posts
            }
        default:
            return state
    }
}