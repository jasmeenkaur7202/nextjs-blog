'use client';

import { NAVIGATION_LINKS } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = () => {
  const router = usePathname();
  
  return (
    <div className='flex pt-4 w-full justify-between'>
      <div className='flex rounded-lg items-center'>
        <span className='font-poppinsRegular font-semibold text-center ml-3'>Your Personal Blog Space</span>
      </div>
      <div className='flex'>
        {NAVIGATION_LINKS.map((item: any, index: number) => (
          <div className={`flex text-darkPink font-semibold gap-x-10 p-3 px-6 ${router === item.link ? 'bg-darkPink text-white rounded-md' : ''}`} key={index + item.link}>
            <Link key={index + item.link} href={item.link}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navigation;