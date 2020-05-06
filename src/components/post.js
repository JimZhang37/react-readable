import React from 'react'
import '../stylesheets/post.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CommentIcon from '@material-ui/icons/Comment';

function Post({post}){
    const {title, author, timestamp, category, voteScore, commentCount} = post
    const time = new Date(timestamp).toString()
    return (
        <div className='post'>
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
        </div>
    )
}

export default Post