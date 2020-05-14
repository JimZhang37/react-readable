import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddComment, handleEditComment } from '../actions/comments'
import '../stylesheets/newComment.css'
class NewComment extends Component {

    constructor(props) {
        super(props)
        const comment = props.comment
        this.state = {
            edit: comment ? true : false,
            body: comment ? comment.body : '',
            author: comment ? comment.author : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.state.edit ?
            this.props.dispatch(handleEditComment({
                ...this.props.comment,
                body: this.state.body,
                author: this.state.author
            }))
            :
            this.props.dispatch(handleAddComment(this.state.body, this.state.author, this.props.postId))
        this.setState({ body: '', author: '' })
        this.props.edit(false)
    }

    render() {

        return (
            <div>
                <form className='new-comment' onSubmit={this.handleSubmit}>
                    <p>{this.state.edit ? 'Edit a comment' : 'Add new comment'}</p>
                    <label>
                        Comment:
                        <input type="text" value={this.state.body} onChange={(e) => { this.setState({ body: e.target.value }) }} />
                    </label>
                    <label>
                        Author:
                        <input type="text" value={this.state.author} onChange={(e) => { this.setState({ author: e.target.value }) }} />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </div>)
    }
}

// function mapStateToProps({ posts }) {
//     return {
//         posts
//     }
// }
export default connect()(NewComment)