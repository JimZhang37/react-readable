import React, { useEffect , useState} from 'react'
import Post from './post'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import '../stylesheets/posts.css'
import { handleGetPostsByCategoryAndCategories, handleReceiveData } from '../actions/shared'

function PostsByCategory({changePostId, change}) {
    const {category} = useParams()
    const dispatch = useDispatch()
    const posts = useSelector(state=>category ? Object.values(state.posts).filter(it=>it.category ===category):Object.values(state.posts))

    useEffect(() => {
        category
        ?
        dispatch(handleGetPostsByCategoryAndCategories(category))
        :
        dispatch(handleReceiveData())
    }, [category])
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
                        <Post post={it} changePostId={changePostId} change={change}/>
                    </li>)
                )}
            </ul>
        </div>
    )


}


export default PostsByCategory;