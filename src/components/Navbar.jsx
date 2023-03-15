import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'

import '../styles/styles.Navbar.css'

function Navbar() {
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
        </nav>

        <form action="#" className='search-bar'>
            <input type="text" placeholder='Buscar algo ...' />
            <button type='submit' >
                <BiSearchAlt className='i'/>
            </button>
        </form>
    </div>
  )
}

export default Navbar