import React, {  useEffect } from 'react'
import Comment from './Comment'
import { connect , useDispatch} from 'react-redux'
import { handleReceiveComments } from '../actions/comments'
import {useParams} from 'react-router-dom'
function Comments({ comments}) {
    let { postId } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleReceiveComments(postId))

    }, [])

    
    
    const filtered = Object.values(comments).filter(it => it.parentId === postId)
    const sorted = filtered.sort((a, b) => b.timestamp - a.timestamp)
    return (
        <div className='posts'>
            <p>Total number of comments is {sorted.length}</p>
            <ul>
                {sorted.map(it =>
                    (<li key={it.id}>
                        <Comment comment={it} />
                    </li>)
                )}
            </ul>
        </div>
    )


}

function mapStateToProps({ comments }) {
    return {
        comments
    }
}
export default connect(mapStateToProps)(Comments)