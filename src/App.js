import React, { useEffect } from 'react';
import './App.css';
import Posts from './components/posts';
import { connect, useDispatch } from 'react-redux'
import { handleReceiveData } from './actions/shared'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NewPost from './components/NewPost';
import Nav from './components/Nav'
import PostContainer from './components/PostContainer'
function App({  posts }) {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(handleReceiveData())
    // }, [])
    // if (Object.keys(posts).length === 0) { return <div></div> }

    return (
        <Router>
            <Nav />
            <Route exact path='/'><Posts /></Route>
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
