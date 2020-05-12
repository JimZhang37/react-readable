import {NavLink} from 'react-router-dom'
import React from 'react'
import {useSelector} from 'react-redux'

export default function Nav(){
    const categories = useSelector((state)=>Object.values(state.categories))

    return (
        <div>
            <NavLink to='/new/post' > New Post</NavLink>
            <NavLink to='/' >Home</NavLink>
            {categories.length >0?categories.map(it=><NavLink to={`/${it.name}`} key={it.name}>{it.name}</NavLink>):''}

        </div>
    )
}