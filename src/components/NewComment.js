import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'
import '../stylesheets/newComment.css'
class NewComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            body: '',
            author: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log('dispose, handle sumbit')
        this.props.dispatch(handleAddComment(this.state.body, this.state.author, this.props.postId))
        this.setState({body:'', author:''})
    }

    render() {

        return (
            <div>
                <form className='new-comment' onSubmit={this.handleSubmit}>
                    <p>Add new comment</p>
                    <label>
                        New Comment:
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

function mapStateToProps({ posts }) {
    return {
        posts
    }
}
export default connect(mapStateToProps)(NewComment)