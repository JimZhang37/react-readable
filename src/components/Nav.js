import {NavLink} from 'react-router-dom'
import React from 'react'

export default function Nav(){

    return (
        <div>
            <NavLink to='/new' > New Post</NavLink>
            <NavLink to='/posts/8xf0y6ziyjabvozdd253nd' > Post</NavLink>
        </div>
    )
}