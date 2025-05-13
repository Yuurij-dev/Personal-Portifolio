import React from 'react'

function IconSkill({content, typeIcon}) {
  return (
    <div className={`icons-skill html flex items-center justify-center text-7xl cursor-pointer border-2 ${typeIcon} border-white`}>
      <i className={content}></i>
    </div>
  )
}

export default IconSkill