import React, { Component } from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../stylesheets/comment.css'
import { connect } from 'react-redux';
import { handleUpvoteComment, handleDownvoteComment } from '../actions/comments';

class Comment extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        const {id, voteScore, body, author, timestamp} = this.props.comment
        const {dispatch} = this.props
        const time = new Date(timestamp).toString()
        return (

            <div className='comment'>
                <div className='comment-vote'>
                    <ArrowDropUpIcon onClick={(e)=>{e.preventDefault(); dispatch(handleUpvoteComment(id))}} className='comment-vote-icon' />
                    <p>{voteScore}</p>
                    <ArrowDropDownIcon  onClick={(e)=>{e.preventDefault(); dispatch(handleDownvoteComment(id))}} className='comment-vote-icon' />
                </div>
                <div className='comment-info'>
                    <div className='comment-body'>{body}</div>
                    <div className='comment-author'>{author}</div>
                    <div className='timestamp'>{time}</div>
                </div>

            </div>

        )
    }
}

export default connect()( Comment)