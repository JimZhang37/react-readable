import { getCommentsByParent, addCommentApi, uuidv4, changeCommentVote } from '../utils/api'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'

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

export function upvoteComment(commentId) {
    return {
        type: UPVOTE_COMMENT,
        commentId
    }
}

export function downvoteComment(commentId) {
    return {
        type: DOWNVOTE_COMMENT,
        commentId
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

        return addCommentApi(comment).then(() => {
            console.log('success')
        })
            .catch(() => {
                console.log('error')
            })
    }
}

export function handleUpvoteComment(commentId) {
    return (dispatch) => {
        dispatch(upvoteComment(commentId))
        return changeCommentVote(commentId, 'upVote')
            .then((res) => {
                console.log('upvote comment successfully', res)
            })
            .catch((e) => {
                console.log('upvote failed')
                dispatch(downvoteComment(commentId))
            })
    }
}

export function handleDownvoteComment(commentId) {
    return (dispatch) => {
        dispatch(downvoteComment(commentId))
        return changeCommentVote(commentId, 'downVote')
            .then((res) => {
                console.log('downvote comment successfully', res)
            })
            .catch((e) => {
                console.log('downvote failed')
                dispatch(upvoteComment(commentId))
            })
    }
}