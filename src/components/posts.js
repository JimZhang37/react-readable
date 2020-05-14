import React, { useState, useEffect } from 'react'
import PostsByCategory from './PostsByCategory'
import NewPost from './NewPost'
function Posts() {

    const [newPost, changeNew] = useState(false)

    const [postId, changePostId] = useState(null)
    useEffect(()=>{
        if(postId != null){
            changeNew(true)
        }
    },[postId])
    return (

        <div>
            <div>
                <button onClick={(e)=>{e.preventDefault();changeNew(!newPost);changePostId(null)}}>{newPost?"Post List":"New Post"}</button>
            </div>
            <div>
                {newPost ?
                    <NewPost change={changeNew} postId={postId} changePostId={changePostId} />
                    :
                    <PostsByCategory changePostId={changePostId} change={changeNew}/>}
            </div>

        </div>)

}


export default Posts