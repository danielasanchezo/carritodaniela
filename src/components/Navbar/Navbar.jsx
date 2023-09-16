import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'


export const Navbar = () => {
  return (

    <nav className=' h-14 '>
      <ul className='flex flex-row gap-10  h-14 p-4 '>
        <strong><li><NavLink to='/'>Inicio</NavLink></li></strong>
        <strong><li><NavLink to='/Contact'>Sobre mi</NavLink></li></strong>
        <strong><li><NavLink to='/Project'>Proyectos</NavLink></li></strong>
        <strong><li><NavLink to='/Tienda'>Tienda</NavLink></li></strong>
        
      </ul>
    </nav>
  )
}
