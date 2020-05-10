import React from 'react'
import '../stylesheets/post.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CommentIcon from '@material-ui/icons/Comment';
import {Link} from 'react-router-dom'
function Post({post}){
    const {id, title, author, timestamp, category, voteScore, commentCount} = post
    const time = new Date(timestamp).toString()
    return (
        <Link to={`/posts/${id}`} className='post'>
            <div className='post-vote'>
                <ArrowDropUpIcon className='post-vote-icon' />
                <p>{voteScore}</p>
                <ArrowDropDownIcon className='post-vote-icon'/>
            </div>
            <div className='post-info'>
                <div className='post-title'>{title}</div>
                <div className='post-author'>{author}</div>
                <div className='post-category'>{category}</div>
                <div className='timestamp'>{time}</div>
            </div>
            <div className='post-comments'>
                <CommentIcon />
                {commentCount}
            </div>
        </Link>
    )
}

export default Post