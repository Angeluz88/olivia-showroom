"use client";
import React, { useState } from 'react';
import Image from 'next/image';



const NavBar = () => {
  const [isClick, setisClick] = useState(false);
   const toggleNavBar = () =>{
    setisClick(!isClick)
   }
  return (
    <>
    <nav className='bg-white'>
        <div className='max-w-7 mx-auto px4 sm:px6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                     <a href="/">
                     <Image
                       src="/Olivia.png"
                       width={50}
                       height={50}
                       alt="Picture of the author"
                      /></a>
                    </div>
                </div>
                <div className='hidden md:block'>
                  <div className='ml-4 flex  items-center space-x-4'>
                    <a href="/" className='text-pink-300 hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Home</a>
                    <a href="/" className='text-pink-300 hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Sales!</a>
                    <a href="/" className='text-pink-300 hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Perfil</a>
                    <a href="/" className='text-pink-300 hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Carrito</a>
                    <a href="/" className='text-pink-300 hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Salir</a>
                  </div>
                </div>
                <div className='md:hidden flex items-center'>
                  <button
                  className='inline-fex items-center justify-center p-2 rounded-md text-pink-300 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-300' onClick={toggleNavBar}>
                    {isClick ? (
                      <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'/>
                      </svg>
                    ):(
                      <svg className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                        <path strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16m-7 6h7'/>
                      </svg>
                    )}
                  </button>
                </div>
            </div>
        </div>
        {isClick && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a href="/" className='text-pink-300 hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Home</a>
                    <a href="/" className='text-pink-300 block hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Sales!</a>
                    <a href="/" className='text-pink-300 block hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Perfil</a>
                    <a href="/" className='text-pink-300 block hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Carrito</a>
                    <a href="/" className='text-pink-300 block hover:bg-pink-500 hover:text-pink-300 rounded-md p-2'>Salir</a>
            </div>
          </div>
        )}
        </nav>
    </>
  );
};

export default NavBar
