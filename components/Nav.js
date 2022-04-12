import React from 'react'
import Link from 'next/link'
export default function Nav() {
  return (
    <nav className="h-24 bg-gray-700 flex  justify-between items-center ">
      <div className='font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue '>
        <Link href='/'>
          <a className='text-base md:text-2xl'>My
            <span className='text-red-600'>Website</span></a>
        </Link>
      </div>
    </nav>
  )
}
