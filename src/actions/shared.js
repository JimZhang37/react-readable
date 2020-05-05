import { getAll} from '../utils/api'


export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveData({categories, posts, comments}){
    return {
        type: RECEIVE_DATA,
        categories,
        posts,
        comments
    }
}

export function handleReceiveData(){
    return (dispatch)=>{
        return getAll().then(

        )
    }
}