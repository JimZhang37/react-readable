import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav'
import PostContainer from './components/PostContainer'
import Posts from './components/posts'
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
