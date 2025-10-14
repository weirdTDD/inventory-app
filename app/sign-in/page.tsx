import { SignIn } from '@stackframe/stack'
import Link from 'next/link'
import React from 'react'

export default function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center  bg-gradient-to-br from-purple-50 to-purple-200'>
      <div className='max-w-md w-full space-y-8'> 
        <SignIn />
        <Link href="/">Back to Home</Link>
      </div>
    </div>

    
  )
}


