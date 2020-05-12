import React, { useState } from 'react'
import PostsByCategory from './PostsByCategory'
import NewPost from './NewPost'
function Posts(props) {

    const [newPost, changeNew] = useState(false)

    return (

        <div>
            <div>
                <button onClick={(e)=>{e.preventDefault();changeNew(!newPost)}}>New Post</button>
            </div>
            <div>
                {newPost ?
                    <NewPost change={changeNew} />
                    :
                    <PostsByCategory />}
            </div>

        </div>)

}


export default Posts