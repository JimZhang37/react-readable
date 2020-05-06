import {getCommentsByParent} from '../utils/api'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function receiveComments({ comments }) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export function handleReceiveComments(PostId){
    return (dispatch)=>{
        return getCommentsByParent(PostId).then((comments)=>{
            dispatch(receiveComments({comments}))
        })
    }
}