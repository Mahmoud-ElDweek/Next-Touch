import React from 'react'
import './Navbar.css'
import LinksMap from './LinksMap'


const DashNav = () => {

  return (
    <nav className='nav'>
      <div className='logo'>LOGO</div>
      <ul>
        <LinksMap />
      </ul>
    </nav>
  )
}

export default DashNav;