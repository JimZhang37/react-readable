import { NavLink } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
import '../stylesheets/nav.css'
export default function Nav() {
    const categories = useSelector((state) => Object.values(state.categories))

    return (
        <nav className='navbar__menu'>
            <ul className='navbar__list'>
                <li>
                    <NavLink className='menu__link' activeClassName='menu__active' exact to='/' >Home</NavLink>
                </li>
                
                {categories.length > 0 ? categories.map(it => <li><NavLink to={`/${it.name}`} key={it.name} className='menu__link' activeClassName='menu__active'>{it.name}</NavLink></li>) : ''}

            </ul>
        </nav>
    )
}