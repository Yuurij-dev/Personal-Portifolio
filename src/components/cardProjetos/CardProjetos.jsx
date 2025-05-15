import React from 'react'
import './style.css'

function CardProjetos({title, p, img, link}) {
  return (
    <div className='card max-w-[500px] text-white  rounded flex flex-col justify-evenly'>
        <a href={link} target="_blank">
          <div className='img-card w-full rounded overflow-hidden '>
            <img src={img} alt="imagem-projeto" className="w-full h-full object-center" />
          </div>
          <h1 className='max-w-[250px] rounded text-center font-bold text-1xl bg-white text-black'>{title}</h1>
          <p className='text-sm'>{p}</p>
        </a>
    </div>

  )
}

export default CardProjetos