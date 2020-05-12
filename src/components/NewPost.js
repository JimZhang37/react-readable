import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'
import { Redirect } from 'react-router-dom'
import '../stylesheets/newPost.css'
class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text: '',
            category: '',
            author: '',
            toHome: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ text: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { title, text, author, category } = this.state
        this.props.dispatch(handleAddPost(title, text, author, category))
        this.setState((state) => ({ toHome: !state.toHome }))
    }

    render() {
        if (this.state.toHome) {
            return <Redirect to='/' />
        }
        const {categories}= this.props

        return (
            <div>
                <h3 className='center'>Compose New Post</h3>
                <form className='new-post' onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} />
                    </label>
                    <textarea
                        placeholder='Your new post starts here!'
                        value={this.state.text}
                        onChange={this.handleChange}
                        className='textarea' />
                    <label>
                        Author:
                        <input type="text" value={this.state.author} onChange={(e) => { this.setState({ author: e.target.value }) }} />
                    </label>
                    <select value={this.state.category} onChange={(e)=>this.setState({category:e.target.value})}>

                        {categories.map(it=><option value={it.name} key={it.name}>{it.name}</option>)}
                    </select>
                    <button
                        className='btn'
                        type='submit'
                        disabled={this.state.text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = ({categories}) => {
    return {
      categories: Object.values(categories)
    }
  }
export default connect(mapStateToProps)(NewPost)