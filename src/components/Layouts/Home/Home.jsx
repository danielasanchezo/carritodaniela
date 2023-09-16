import React from 'react'
import { Header } from '../../Header/Header'
import logo  from '../../Layouts/Home/logo.png'
import fb  from '../../Layouts/Home/fb.png'
import tw  from '../../Layouts/Home/tw.png'
import inst  from '../../Layouts/Home/inst.png'


export const Home = () => {
  return (
    <>
    <Header/>
    <div className='bg'>
      <section className='flex'>
        <div className='w-1/2 p-4'>
          <h2>Mi Nombre es Daniela Sanchez O</h2>
          <p>Tengo 23 años, soy una joven con ganas de tener a diario aprendizajes y de vivir nuevas experiencias, estoy estudiando desarrollo de software,
              voy en quinto trimestre, en un futuro me gustaria llegar a una empresa para construir mejor mi conocimiento.
              En mi tiempo libre me gusta patinar, conocer nuevos lugares y disfrutar tiempo en familia.</p>
        </div>
        <div className='w-1/3 p-4 flex justify-end items-center'>
          <img src={logo} alt="" className='w-44 h-auto' />
        </div>
      </section>
    </div>
    <footer>
      <br></br>

      <div className='bg'>
        <section className='flex'>
          <div className='w-1/2 p-4'>
            <h1>Me puedes contactar por medio de mis redes sociales como: @danielasanchezo</h1>
          </div>
          <div className='w-1/2 p-4 flex justify-end items-center'>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={fb}
                alt="Redes sociales"
                className="w-8 h-auto mr-2"
              />
            </a>
            <br />

            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={tw}
                alt="Redes sociales"
                className="w-8 h-auto mr-2"
              />
            </a>
            <br />

            <a href="https://www.instagram.com/?hl=es-la" target="_blank" rel="noopener noreferrer">
              <img
                src={inst}
                alt="Redes sociales"
                className="w-8 h-auto"
              />
            </a>
          </div>
        </section>
      </div>
    </footer>    
    </>
  )
}
