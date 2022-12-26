import React from 'react'
import "./Button.scss"

function CshButton({text,click}) {
  return (
    <button className='csh-buttons' onClick={()=>click()}>{text}</button>
  )
}

export default CshButton;