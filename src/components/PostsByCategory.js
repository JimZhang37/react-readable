import React, { useEffect , useState} from 'react'
import Post from './post'
import {useDispatch, useSelector} from 'react-redux'
import {handleGetPostsByCategory} from '../actions/posts'
import {useParams} from 'react-router-dom'
import '../stylesheets/posts.css'
import { handleGetPostsByCategoryAndCategories } from '../actions/shared'

function PostsByCategory() {
    const {category} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleGetPostsByCategoryAndCategories(category))
    }, [category])
    const posts = useSelector(state=>Object.values(state.posts).filter(it=>it.category ===category))
    const [sort, setSort] = useState('time')

    if(Object.keys(posts).length === 0){
        return (<div>Posts in {category} category is loading</div>)
    }
    if (sort ==='time'){
        posts.sort((a,b)=>b.timestamp - a.timestamp)
    }
    else {
        posts.sort((a,b)=>b.voteScore - a.voteScore)
    }
    
    return (
        <div className='posts'>
            <select value={sort} onChange={(e) => setSort(e.target.value)} >
                <option value="time">Sort by time</option>
                <option value="vote">Sort by voting</option>
            </select>
            <ul>
                {posts.map(it =>
                    (<li key={it.id}>
                        <Post post={it} />
                    </li>)
                )}
            </ul>
        </div>
    )


}


export default PostsByCategory;