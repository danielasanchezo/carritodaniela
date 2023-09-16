import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import blue from '../Project/blue.png'
import page from '../Project/page.png'

export const Project = () => {
  return (
    <>
    <Navbar/>  
    <br></br>
    <strong><h1 className='flex justify-center items-center'>Mis proyectos personales:</h1></strong><br></br>

    <div className='bg'>
      <section className='flex'>
        <div className='w-1/2 p-4'> 
          <p>Este fue uno de los proyectos que realice durante mis estudios.</p><br />
          <strong><p><a href="https://blue-easydani.netlify.app" target="_blank" rel="noopener noreferrer">Click aqui para verlo</a></p></strong>
        </div>
        <div className='w-1/3 p-4 flex justify-end items-center'>
          <img src={blue} alt="" className='w-44 h-auto' />
        </div>
      </section>
    </div><br />

    <div className='bg'>
      <section className='flex'>
        <div className='w-1/2 p-4'> 
          <p>Este fue uno de los proyectos que realice durante mis estudios.</p><br />
          <strong><p><a href="https://daniela10.netlify.app" target="_blank" rel="noopener noreferrer">Click aqui para verlo</a></p></strong>
        </div>
        <div className='w-1/3 p-4 flex justify-end items-center'>
          <img src={page} alt="" className='w-44 h-auto' />
        </div>
      </section>
    </div>
    </>
  )
}
