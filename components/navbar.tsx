import Image from 'next/image'
import React from 'react'

export default function Navbar ()  {
  return (
    <div>
      <nav className='shadow-sm fixed w-full z-10'>
        <div className='w-full'>
            <div className='flex items-center h-20 w-full'>
                {/* 1st Block */}
                <div className="">
                    <Image
                        src= "/logox.png"
                        alt=''
                        className="w-38 h-16"
                        width={1200}
                        height={600}
                    />
                </div>

            </div>
        </div>
      </nav>
    </div>
  )
}


