import React, { useState } from 'react'
import Post from './post'
import '../stylesheets/posts.css'
function Posts({ posts }) {
    const [sort, setSort] = useState('time')
    console.log(posts)
    if (sort ==='time'){
        posts.sort((a,b)=>b.timestamp - a.timestamp)
    }
    else {
        posts.sort((a,b)=>b.voteScore - a.voteScore)
    }
    
    return (
        <div className='posts'>
            <select value={sort} onChange={(e) => setSort(e.target.value)} >
                <option value="time">Sort by time</option>
                <option value="vote">Sort by voting</option>
            </select>
            <ul>
                {posts.map(it =>
                    (<li key={it.id}>
                        <Post post={it} />
                    </li>)
                )}
            </ul>
        </div>
    )


}

export default Posts