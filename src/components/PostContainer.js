import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comments'
import NewComment from './NewComment';
import { handleGetPost, handleUpvotePost, handleDownvotePost, handleRemovePost } from '../actions/posts';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import NewPost from './NewPost'
function PostContainer() {
    const { category, postId } = useParams();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleGetPost(postId))
    }, [postId])
    const post = useSelector(state => state.posts[postId])
    const [newComment, setNewComment] = useState(false)
    
    const [editPost, changeEdit] = useState(false)
    const [pId, changePostId] = useState(postId)
    if(editPost){
        return <NewPost change={changeEdit} postId={pId} changePostId={changePostId} />
    }
    if (post) {
        const { id, timestamp, title, body, voteScore, author } = post
        console.log(timestamp,"aaa")
        const time = new Date(timestamp).toString()
        return (

            <div className='post-container'>

                <div className='post'>
                    <div className='post-vote'>
                        <ArrowDropUpIcon onClick={(e) => { e.preventDefault(); dispatch(handleUpvotePost(id)) }} className='post-vote-icon' />
                        <p>{voteScore}</p>
                        <ArrowDropDownIcon onClick={(e) => { e.preventDefault(); dispatch(handleDownvotePost(id)) }} className='post-vote-icon' />
                    </div>
                    <div className='post-info'>
                        <p>{title}</p>
                        <p>{time}</p>
                    </div>

                    <div className='post-actions'>
                        <DeleteOutlineIcon onClick={(e) => { e.preventDefault(); dispatch(handleRemovePost(post)) }} className='post-vote-icon' />
                        <EditIcon className='post-vote-icon' onClick={(e) => { e.preventDefault(); changeEdit(true)}} />
                    </div>
                </div>

                <p>id: {id}</p>

                <p>author: {author}</p>
                <p>body: {body}</p>
                <p></p>
                <button onClick={(e) => { e.preventDefault(); setNewComment(!newComment) }}>New Comment</button>
                {newComment ? <NewComment postId={postId} /> : ''}

                <Comments postId={postId} />
            </div>
        )
    }
    // console.log( 'posts', posts)
    return (<div>404</div>)

}



export default PostContainer