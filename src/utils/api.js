import { getAll } from './posts'
import axios from 'axios'
export default getAll
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


async function getPostsByCategory() {

}


export const addPostAPI= (post)=>
    axios.post('/posts', post, {headers})
    .then((res)=> res.data)

async function changePostVote() {

}

async function disablePost() {

}

async function editPost() {

}

async function incrementPostCommentCounter() {

}

//Comments
async function getComments() {

}
export const getCommentsByParent = (postId) =>
    axios.get(`/posts/${postId}/comments`, { headers })
    .then((res) => res.data)


async function addComment() {

}

async function voteComment() {

}

async function disableCommentByParent() {

}

async function disableComment() {

}

async function editComment() {

}
