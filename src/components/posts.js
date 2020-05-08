import React, { useState, useEffect } from 'react'
import Post from './post'
import {connect} from 'react-redux'
import '../stylesheets/posts.css'
import {handleReceiveComments} from '../actions/comments'
function Posts({ posts,comments,dispatch }) {
    // useEffect(()=>{
    //     posts.forEach(element => {
    //         dispatch(handleReceiveComments(element.id))
    //     });
    // },[posts])

    const [sort, setSort] = useState('time')
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

function mapStateToProps({ comments }) {
    return {
        comments
    }
}
export default connect(mapStateToProps)(Posts);