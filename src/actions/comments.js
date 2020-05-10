import { getCommentsByParent,  addCommentApi, uuidv4 } from '../utils/api'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function removeComment(comment) {
    return {
        type: REMOVE_COMMENT,
        comment
    }
}

export function handleReceiveComments(PostId) {
    return (dispatch) => {
        return getCommentsByParent(PostId).then((comments) => {
            const commentsObj = {}
            comments.forEach(it => commentsObj[it.id] = it)
            dispatch(receiveComments(commentsObj))
        })
    }
}

export function handleAddComment(body, author, parentId) {
    const comment = {
        id: uuidv4(),
        timestamp: Date.now(),
        body,
        author,
        parentId,
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    }
    return (dispatch) => {

        console.log('comment', comment)
        dispatch(addComment(comment))

        return addCommentApi(comment).then(()=>{
            console.log('success')
        })
        .catch(()=>{
            console.log('error')
        })
    }
}