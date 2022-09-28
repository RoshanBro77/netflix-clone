import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from './netflixLogo.png'
function Nav() {
  const [show, handleShow] = useState(false)
  useEffect(
    () => () => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          handleShow(true)
        } else handleShow(false)
      })
      return () => {
        window.removeEventListener('scroll')
      }
    },
    []
  )
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      {/* logo */}
      <img className='nav__logo' src={logo} alt='Netflix Logo' />
      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        alt='Avatar'
      />
    </div>
  )
}

export default Nav
