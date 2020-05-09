import React, { Component } from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../stylesheets/comment.css'

class Comment extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        const {voteScore, body, author, timestamp} = this.props.comment
        const time = new Date(timestamp).toString()
        return (

            <div className='comment'>
                <div className='comment-vote'>
                    <ArrowDropUpIcon className='comment-vote-icon' />
                    <p>{voteScore}</p>
                    <ArrowDropDownIcon className='comment-vote-icon' />
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

export default Comment