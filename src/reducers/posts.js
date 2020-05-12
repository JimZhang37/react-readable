import { RECEIVE_DATA } from '../actions/shared'
import { ADD_POST, REMOVE_POST, UPVOTE_POST, DOWNVOTE_POST } from '../actions/posts'
import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/comments'
export default function posts(state = {}, action) {
    switch (action.type) {
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
            const newState = Object.values(state).filter((it) => it.id !== action.post.id)
            const s = {}
            newState.forEach(it => {
                s[it.id] = it
            })
            return s
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {
                    ...state[action.comment.parentId],
                    commentCount: state[action.comment.parentId].commentCount + 1
                }
            }
        case REMOVE_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {
                    ...state[action.comment.parentId],
                    commentCount: state[action.comment.parentId].commentCount - 1
                }
            }
        case UPVOTE_POST:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    voteScore: state[action.postId].voteScore + 1
                }
            }
        case DOWNVOTE_POST:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    voteScore: state[action.postId].voteScore - 1
                }
            }
        default:
            return state
    }
}

