import { getCP, getPostsByCategoryAndCategoriesAPI } from '../utils/api'


export const RECEIVE_DATA = 'RECEIVE_DATA'
export const GET_POSTS_BY_CATEGORY_AND_CATEGORY = 'GET_POSTS_BY_CATEGORY_AND_CATEGORY'

function receiveData({ categories, posts }) {
    return {
        type: RECEIVE_DATA,
        categories,
        posts
    }
}

function getPostsByCategoryAndCategories({categories, posts}){
    return {
        type: GET_POSTS_BY_CATEGORY_AND_CATEGORY,
        categories,
        posts
    }
}
export function handleReceiveData() {
    return (dispatch) => {
        return getCP().then(([categories, posts]) => {
            // console.log('handleReceiveData', categories, posts)
            const postsObj = {}
            posts.forEach((post)=>{postsObj[post.id]=post})
            const catsObj = {}
            categories.categories.forEach((it)=>{
                catsObj[it.name] = it
            })
            dispatch(receiveData({ categories:catsObj, posts:postsObj }))
        })
    }
}

export function handleGetPostsByCategoryAndCategories(categoryId){
    return (dispatch)=>{
        return getPostsByCategoryAndCategoriesAPI(categoryId).then(([categories, posts]) => {
            // console.log('handleReceiveData', categories, posts)
            const postsObj = {}
            posts.forEach((post)=>{postsObj[post.id]=post})
            const catsObj = {}
            categories.categories.forEach((it)=>{
                catsObj[it.name] = it
            })
            dispatch(getPostsByCategoryAndCategories({ categories:catsObj, posts:postsObj }))
        })
    }
}