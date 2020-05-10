import React, {Component} from 'react'
import { connect } from 'react-redux'
import {handleAddComment} from '../actions/comments'
class NewComment extends Component {

    constructor(props){
        super(props)
        this.state = {
            body : 'abc',
            author: '123'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        console.log('dispose, handle sumbit')
        this.props.dispatch(handleAddComment(this.state.body, this.state.author, this.props.postId))
    }

    render (){

        return (<div>
                <form onSubmit={this.handleSubmit}>
                    <p>Inside form</p>
                    <button type='submit'>Submit</button>
                </form>
        </div>)
    }
}

function mapStateToProps({  posts }) {
    return {
        posts
    }
}
export default connect(mapStateToProps)(NewComment)