import React from 'react'
import './style.css'

function CardProjetos({title, p, img}) {
  return (
    <div className='card max-w-[500px] text-white  rounded flex flex-col justify-evenly'>
        <div className='img-card w-full rounded overflow-hidden '>
            <img src={img} alt="imagem-projeto" className="w-full h-full object-center" />
        </div>
        <h1 className='w-[100px] rounded text-center font-bold text-1xl bg-white text-black'>{title}</h1>
        <p className='text-sm'>{p}</p>

    </div>

  )
}

export default CardProjetos