'use client';

import { ABOUT_TEXT } from '@/constants';
import React from 'react'

const About = () => {
  return (
    <div className="text-center font-normal text-md mx-4 my-4">
      {ABOUT_TEXT}
    </div>
  )
}

export default About;