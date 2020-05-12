import { addPostAPI, uuidv4, changePostVote, disablePost, getPostAPI } from '../utils/api'

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UPVOTE_POST = 'UPVOTE_POST'
export const DOWNVOTE_POST = 'DOWNVOTE_POST'
export const GET_POST = 'GET_POST'

function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

function removePost(post) {
    return {
        type: REMOVE_POST,
        post
    }
}

function upvotePost(postId) {
    return {
        type: UPVOTE_POST,
        postId
    }
}

function downvotePost(postId) {
    return {
        type: DOWNVOTE_POST,
        postId
    }
}

function getPost(post) {
    return {
        type: GET_POST,
        post
    }
}



export function handleAddPost(title, body, author, category) {
    const post = {
        id: uuidv4(),
        timestamp: Date.now(),
        title,
        body,
        author,
        category,
        voteScore: 1,
        commentCount: 0
    }
    return (dispatch) => {
        dispatch(addPost(post))
        return addPostAPI(post).then((data) =>
            console.log('add post successfully')
        )
            .catch((e) => {
                console.log('add post failed')
                dispatch(removePost(post))
            })
    }
}

export function handleUpvotePost(postId) {

    return (dispatch) => {
        dispatch(upvotePost(postId))
        return changePostVote(postId, 'upVote')
            .then((res) => {
                // console.log('upvote successfully', res)
            })
            .catch((e) => {
                // console.log('upvote failed')
                dispatch(downvotePost(postId))
            })
    }
}

export function handleDownvotePost(postId) {

    return (dispatch) => {
        dispatch(downvotePost(postId))
        return changePostVote(postId, 'downVote')
            .then((res) => {
                // console.log('downvote successfully', res)
            })
            .catch((e) => {
                // console.log('downvote failed')
                dispatch(upvotePost(postId))
            })
    }
}

export function handleRemovePost(post) {
    return (dispatch) => {
        dispatch(removePost(post))
        return disablePost(post.id).then(
            (res) => {
                //do nothing
            }
        ).catch((e) => {
            dispatch(addPost(post))
        })
    }
}

export function handleGetPost(postId) {
    return (dispatch) => {
        return getPostAPI(postId).then((res) => {
            dispatch(getPost(res))
        }

        )
            .catch((e) => console.log('getPost failed'))
    }
}
