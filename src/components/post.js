import React from 'react'
import '../stylesheets/post.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom'
import { handleUpvotePost, handleDownvotePost, handleRemovePost } from '../actions/posts'
import { connect } from 'react-redux'

function Post({ post, dispatch }) {
    const { id, title, author, timestamp, category, voteScore, commentCount } = post
    const time = new Date(timestamp).toString()
    return (
        <Link to={`/posts/${id}`} className='post'>
            <div className='post-vote'>
                <ArrowDropUpIcon onClick={(e) => { e.preventDefault(); dispatch(handleUpvotePost(id)) }} className='post-vote-icon' />
                <p>{voteScore}</p>
                <ArrowDropDownIcon onClick={(e) => { e.preventDefault(); dispatch(handleDownvotePost(id)) }} className='post-vote-icon' />
            </div>
            <div className='post-info'>
                <div className='post-title'>{title}</div>
                <div className='post-author'>{author}</div>
                <div className='post-category'>{category}</div>
                <div className='timestamp'>{time}</div>
                <div className='post-comments'>
                    <CommentIcon />
                    {commentCount}

                </div>

            </div>
            <div className='post-actions'>
                <DeleteOutlineIcon onClick={(e)=> {e.preventDefault(); dispatch(handleRemovePost(post))}} className='post-vote-icon'/>
                <EditIcon className='post-vote-icon'/>
            </div>
        </Link>
    )
}


export default connect()(Post)