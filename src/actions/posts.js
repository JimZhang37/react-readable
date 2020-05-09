import { addPostAPI } from '../utils/api'

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

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

export function handleAddPost(title, body, author, category) {
    const post = {
        id: uuidv4(),
        timestamp: Date.now(),
        title,
        body,
        author,
        category,
        voteScore:1,
        commentCount:0
    }
    return (dispatch) => {
        dispatch(addPost(post))
        return addPostAPI(post).then((data) =>
            console.log('add post successfully')
        )
        .catch((e)=>{
            console.log('add post failed')
            dispatch(removePost(post))
        })
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }