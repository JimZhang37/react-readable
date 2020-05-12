import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux';
import Comments from './Comments'
import NewComment from './NewComment';
import { handleGetPost } from '../actions/posts';

function PostContainer(){
    const {postId} = useParams();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleGetPost(postId))
    }, [postId])
    const post = useSelector(state=>state.posts[postId])
    if(post ){
        const {id, timestamp, title, body, voteScore, author} = post
        return (

            <div>
                <p>{id}</p>
                <p>{title}</p>
                <p>{author}</p>
                <p>{body}</p>
                <p>{timestamp}</p>
                <NewComment postId={postId}/>
                <Comments postId = {postId}/>
            </div>
        )
    }
    // console.log( 'posts', posts)
    return (<div></div>)
    
}



export default PostContainer