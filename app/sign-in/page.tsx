import { SignIn } from '@stackframe/stack'
import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center  bg-gradient-to-br from-purple-50 to-purple-200'>
      <div className='max-w-md w-full space-y-8'> 
        <SignIn />

        <div className='flex items-center justify-center gap-10 mr-16'>
          <Link
            href="/" 
            className="border-2 border-purple-300 bg-purple-200 text-gray-600 hover:text-white px-7 py-3  rounded-lg font-semibold shadow-xl hover:bg-purple-500 transition-colors "
            >
              Back to Home</Link>
          <Link href="/add-products" className= " bg-purple-600 text-white px-7 py-3  rounded-lg font-semibold hover:bg-purple-800 shadow-xl transition-colors ">Add Products</Link>
          
        </div>

      </div>
    </div>

    
  )
}


