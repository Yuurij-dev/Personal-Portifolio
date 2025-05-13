import React from 'react'
import { TextEffect } from './components/index'

function App() {
  return (
    <div>
      <header className='w-full flex flex-col items-center'>

        <nav className='w-full flex justify-between items-center'>
          <div className="">
            <h1 className='font-bold text-md'>Yuri</h1>
            
          </div>
          <ul className='flex gap-2 text-sm '>
            <li><a className='hover-underline' href="#">Home</a></li>
            <li><a className='hover-underline' href="#">Sobre</a></li>
            <li><a className='hover-underline' href="#">Habilidades</a></li>
            <li><a className='hover-underline' href="#">Projetos</a></li>
            <li><a className='hover-underline' href="#">Contatos</a></li>
          </ul>
          <button className='border-white border cursor-pointer text-md hover:bg-white hover:text-black '>Baixar CV</button>
        </nav>
        
        <div className="content-header flex flex-col w-full max-w-2xl items-center justify-center text-center">
          <TextEffect text='Yuri'/>
          <p className='text-3xl'>Entregando Soluções de Frontend Personalizadas <span className='bg-white text-black'>que se Destacam.</span></p>
        </div>

      </header>
    </div>
  )
}

export default App