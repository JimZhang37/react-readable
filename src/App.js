import React, { useEffect, useState } from 'react';
import { getCP, getCategories} from './utils/api'
import './App.css';
import Posts from './components/posts';



function App() {
    const [posts, setPosts] = useState()
    const [tem, setTem] = useState()
    useEffect(()=>{

        getCP().then(([res1, res2])=>console.log(res1,res2))
        
    }, [])
    
  return (
    posts?
    <Posts posts={posts} />
    :''
  );
}

export default App;
