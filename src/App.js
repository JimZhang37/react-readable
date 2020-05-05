import React, { useEffect, useState } from 'react';
import getAll from './utils/api'
import './App.css';
import Posts from './components/posts';



function App() {
    const [posts, setPosts] = useState()
    useEffect(()=>{

        getAll().then((it)=>setPosts(it))
        
    }, [])
    
  return (
    posts?
    <Posts posts={posts} />
    :''
  );
}

export default App;
