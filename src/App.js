import React, { useEffect, useState } from 'react';
import { getCP, getCategories } from './utils/api'
import './App.css';
import Posts from './components/posts';
import { connect } from 'react-redux'
import { handleReceiveData } from './actions/shared'

function App({ categories, posts, dispatch }) {

    useEffect(() => {
        dispatch(handleReceiveData())
    }, [])
    return (
        Object.keys(posts).length !==0 ?
            <Posts posts={Object.values(posts)} />
            : ''
    );
}

function mapStateToProps({ categories, posts }) {
    return {
        categories,
        posts
    }
}
export default connect(mapStateToProps)(App);
