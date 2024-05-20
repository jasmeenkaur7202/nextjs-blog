'use client';

import React from 'react'

const Button = ({ name, onClick, className}: any) => {
  return (
    <button onClick={onClick} className={`bg-darkPink py-1 px-4 rounded-md text-white font-semibold border-darkPink ${className}`}>
      {name}
    </button>
  )
}

export default Button;