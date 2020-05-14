import React, { Component } from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../stylesheets/comment.css'
import { connect } from 'react-redux';
import { handleUpvoteComment, handleDownvoteComment, handleDisableComment } from '../actions/comments';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { id, voteScore, body, author, timestamp } = this.props.comment
        const { dispatch, edit } = this.props
        const time = new Date(timestamp).toString()
        return (

            <div className='comment'>
                <div className='comment-vote'>
                    <ArrowDropUpIcon onClick={(e) => { e.preventDefault(); dispatch(handleUpvoteComment(id)) }} className='comment-vote-icon' />
                    <p>{voteScore}</p>
                    <ArrowDropDownIcon onClick={(e) => { e.preventDefault(); dispatch(handleDownvoteComment(id)) }} className='comment-vote-icon' />
                </div>
                <div className='comment-info'>
                    <div className='comment-body'>{body}</div>
                    <div className='comment-author'>{author}</div>
                    <div className='timestamp'>{time}</div>
                </div>
                <div className='comment-actions'>
                    <DeleteOutlineIcon onClick={(e) => { e.preventDefault(); dispatch(handleDisableComment(this.props.comment)) }} className='comment-vote-icon' />
                    <EditIcon className='comment-vote-icon' onClick={(e) => { e.preventDefault();edit(true) }} />
                </div>
            </div>

        )
    }
}

export default connect()(Comment)