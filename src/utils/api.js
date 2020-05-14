
import axios from 'axios'

const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getCP = () =>
    axios.all(
        [
            axios.get('/categories', { headers }),
            axios.get('/posts', { headers })
        ]
    ).then(axios.spread((obj1, obj2) =>
        ([obj1.data, obj2.data])))

export const getPostsByCategoryAndCategoriesAPI = (category) =>
    axios.all(
        [
            axios.get('/categories', { headers }),
            axios.get(`/${category}/posts`, { headers })
        ]
    ).then(axios.spread((obj1, obj2) =>
        ([obj1.data, obj2.data])))

export const getCategories = () =>
    axios.get('/categories', { headers })
        .then((res) => res.data)

//Post
export const getPosts = () =>
    axios({
        url: '/posts',
        method: 'GET',
        headers,
    }).then((res) =>
        res.data)


export const getPostsByCategoryAPI = (category) =>
    axios.get(`/${category}/posts`, { headers })
        .then((res) => res.data)

export const getPostAPI = (postId) =>
    axios.get(`/posts/${postId}`, { headers })
        .then((res) => res.data)

export const addPostAPI = (post) =>
    axios.post('/posts', post, { headers })
        .then((res) => res.data)


export const changePostVote = (postId, option) =>
    axios.post(`/posts/${postId}`, { option }, { headers })
        .then((res) => res.data)



export const disablePost = (postId) =>
    axios.delete(`/posts/${postId}`, { headers })
        .then((res) => res.data)


export const editPostAPI = (post) =>
    axios.put(`/posts/${post.id}`, post, { headers })
        .then((res) => res.data)
async function incrementPostCommentCounter() {

}

//Comments

export const getCommentsByParent = (postId) =>
    axios.get(`/posts/${postId}/comments`, { headers })
        .then((res) => res.data)


export const addCommentApi = (comment) =>
    axios.post('/comments', comment, { headers })
        .then((res) => res.data)

export const changeCommentVote = (commentId, option) =>
    axios.post(`/comments/${commentId}`, { option }, { headers })
        .then((res) => res.data)


async function disableCommentByParent() {

}


export const disableCommentAPI = (commentId) =>
    axios.delete(`/comments/${commentId}`, {headers}).then((res) => res.data)



export const editCommentAPI = (comment)=>
    axios.put(`/comments/${comment.id}`, comment, {headers})
        .then((res)=> res.data)

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}