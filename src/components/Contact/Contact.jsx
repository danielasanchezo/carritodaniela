import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import lenguajes from "../Contact/lenguajes.jpg";
import admin from "../Contact/admin.jpg";
import objetivos from "../Contact/objetivos.avif";
import '../Contact/Contact.css';


export const Contact = () => {
  return (
    <>
    <Navbar/>  
    <br></br>
    <div className='bg'>
      <section className='flex'>
        <div className='w-1/2 p-4'>
         <strong><h1>Mi experiencia laboral:</h1></strong> 
          <p>Tengo 3 años de experiencia laboral en donde durante el proceso he
            aprendido los siguientes lenguaje de programación.</p>
        </div>
        <div className='w-1/3 p-4 flex justify-end items-center'>
           <img src={lenguajes} alt="" className='w-44 h-auto' />
        </div>
      </section>
    </div>

    <br></br>
    <div className='bg'>
      <section className='flex'>
        <div className='w-1/2 p-4'>
          <strong><h1>Mis estudios:</h1></strong>
          <p>Realice mis estudios profesionales como administradora de empresas, actualmente me gustaria
            ejercer mi carrera en una empresa de software en donde pueda aplicar todo lo que he aprendido
            a lo largo del tiempo.</p>
        </div>
        <div className='w-1/3 p-4 flex justify-end items-center'>
           <img src={admin} alt="" className='w-44 h-auto' />
        </div>
      </section>
    </div>
    
    <br></br>
    <div className='bg'>
      <section className='flex'>
        <div className='w-1/2 p-4'>
          <strong><h1>Mis objetivos:</h1></strong>
          <p>Aprender mejor a programar para llegar a ser lider de un equipo de programadores 
            y complementar mi carrera con el tecnologo de desarrollo de software.
          </p>
        </div>
        <div className='w-1/3 p-4 flex justify-end items-center'>
           <img src={objetivos} alt="" className='w-44 h-auto' />
        </div>
      </section>
    </div>
    </>
  )
}
