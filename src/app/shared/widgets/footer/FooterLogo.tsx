import React from 'react'
import logo from '@/app/assets/images/BirdFlying.png';
import Image from 'next/image';

function FooterLogo() {
  return (
    <div className='py-3 flex gap-2 items-center'>
        <Image className='w-10 h-10' src={logo} alt="logo" />
        <h1 className='text-xl font-semibold uppercase md:text-2xl'>Pigeon Pulse</h1>
    </div>
  )
}

export default FooterLogo 