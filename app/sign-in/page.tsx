'use client'

import { SignIn } from '@stackframe/stack'
import { useUser } from '@stackframe/stack'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  return <SignIn fullPage={true} />
}
