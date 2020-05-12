import React from 'react';
import './App.css';
import Posts from './components/posts';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NewPost from './components/NewPost';
import Nav from './components/Nav'
import PostContainer from './components/PostContainer'
import PostsByCategory from './components/PostsByCategory'

function App() {
    return (
        <Router>
            <Nav />
            <Route exact path='/'><Posts /></Route>
            <Route path='/new/post' component={NewPost}></Route>
            <Route path='/posts/:postId' component={PostContainer}></Route>
            <Route exact path='/:category'><PostsByCategory /></Route>

        </Router>
    );
}

export default App;
