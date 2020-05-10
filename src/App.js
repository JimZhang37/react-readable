import React, { useEffect, useState } from 'react';
import { getCP, getCategories } from './utils/api'
import './App.css';
import Posts from './components/posts';
import { connect } from 'react-redux'
import { handleReceiveData } from './actions/shared'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NewPost from './components/NewPost';
import Nav from './components/Nav'
import Comments from './components/Comments'
import PostContainer from './components/PostContainer'
function App({ categories, posts, dispatch }) {

    useEffect(() => {
        dispatch(handleReceiveData())
    }, [])
    if (Object.keys(posts).length === 0) { return <div></div> }

    return (
        <Router>
            <Nav />
            {Object.keys(posts).length !== 0 ?
                <Route exact path='/'><Posts posts={Object.values(posts)} /></Route>

                : ''}
            <Route path='/new' component={NewPost}></Route>
            <Route path='/posts/:postId' component={PostContainer}></Route>
        </Router>

    );
}

function mapStateToProps({ categories, posts }) {
    return {
        categories,
        posts
    }
}
export default connect(mapStateToProps)(App);
