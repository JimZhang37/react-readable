import { getCP } from '../utils/api'


export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveData({ categories, posts }) {
    return {
        type: RECEIVE_DATA,
        categories,
        posts
    }
}

export function handleReceiveData() {
    return (dispatch) => {
        return getCP().then(([categories, posts]) => {
            console.log('handleReceiveData', categories, posts)
            dispatch(receiveData({ categories, posts }))
        })
    }
}