import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import NewPost from './components/NewPost';
import Nav from './components/Nav'
import PostContainer from './components/PostContainer'
import Posts from './components/Posts'
function App() {
    return (
        <Router>
            <Nav />
            <Route exact path='/'><Posts /></Route>
            <Route path='/:category/:postId' component={PostContainer}></Route>
            <Route exact path='/:category'><Posts /></Route>

        </Router>
    );
}

export default App;
