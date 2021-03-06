import {RECEIVE_COMMENTS, ADD_COMMENT, UPVOTE_COMMENT, DOWNVOTE_COMMENT, DISABLE_COMMENT, EDIT_COMMENT} from '../actions/comments'


export default function comments(state={}, action){
    switch(action.type){
        case RECEIVE_COMMENTS:
            return {
                ...state,
                ...action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]:action.comment
            }
        case DISABLE_COMMENT:
            const newState = Object.values(state).filter(it=>it.id !==action.comment.id)
            const s = {}
            newState.forEach(it =>{
                s[it.id] = it
            })
            return s
        case UPVOTE_COMMENT:
            return {
                ...state,
                [action.commentId]:{
                    ...state[action.commentId],
                    voteScore: state[action.commentId].voteScore + 1
                }
            }

        case DOWNVOTE_COMMENT:
            return {
                ...state,
                [action.commentId]:{
                    ...state[action.commentId],
                    voteScore: state[action.commentId].voteScore - 1
                }
            }
        case EDIT_COMMENT:
            return {
                ...state,
                [action.comment.id]:{
                    ...action.comment
                }
            }
        default:
            return state
    }
}