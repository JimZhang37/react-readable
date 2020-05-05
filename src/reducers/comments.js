

export default function comments(state={}, action){
    switch(action.type){
        case RECEIVE_DATA:
            return {
                ...state,
                ...action.comments
            }
        
        default:
            return state
    }
}