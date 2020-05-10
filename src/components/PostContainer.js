import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import Comments from './Comments'
import NewComment from './NewComment';

function PostContainer({posts}){
    const {postId} = useParams();
    console.log( 'posts', posts)
    const {id, timestamp, title, body, voteScore, author} = posts[postId]
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

function mapStateToProps({  posts }) {
    console.log('p', posts)
    return {

        posts
    }
}

export default connect(mapStateToProps)(PostContainer)