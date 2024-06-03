'use client';

import React from 'react'

const Button = ({ name, onClick, className}: any) => {
  return (
    <button onClick={onClick} className={`bg-darkPink py-1 px-4 rounded-md text-white font-semibold border-darkPink transition hover:ease-out hover:duration-300 hover:bg-gradient-to-b hover:from-[rgba(0,0,0,0.05)] hover:opacity-90 hover:shadow-[0_4px_5px_rgba(0,0,0,0.15)] ${className}`}>
      {name}
    </button>
  )
}

export default Button;