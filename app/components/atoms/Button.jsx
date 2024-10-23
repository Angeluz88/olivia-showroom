"use client"
import React, {useState} from 'react'

const Button = () => {
    const [isClick, setisClick] = useState(false);
   const isActive = () =>{
    setisClick(!isClick)
   }
  return (
    <button
    className='inline-fex items-center justify-center p-2 text-pink-300 rounded-full hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-300' onClick={isActive}>
        boton
 </button>
  )
}

export default Button
