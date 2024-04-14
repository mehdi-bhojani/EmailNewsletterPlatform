import { navItems } from '@/app/configs/constants'
import Link from 'next/link'
import React from 'react'

function NavItems() {
  return (
    <div className='mt-3 hidden sm:block'>
        <ul className='flex gap-4'>
            {navItems.map((item:NavItems,index:number)=>(
                <li key={index} className='hover:text-blue-400'>
                    <Link href={"/"} >{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default NavItems