'use client';

import React from 'react'

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className='bg-[#333] text-white p-[5px]'>
      <div className='flex bottom-0 flex-row gap-8 justify-between items-center my-2 mx-3'>
        <span>v1.0.0</span>
        <span>BLOG APP, CREATED WITH ❤️ | All Rights Reserved &copy; {currentYear}</span>
      </div>
    </div>
  )
}

export default Footer;