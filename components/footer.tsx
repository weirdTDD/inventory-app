import Link from 'next/link';
import React from 'react'

const footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className='text-center py-4'>
        <Link   href="">
            Privacy
        </Link>
        <span>|</span>

        <Link   href="">
            Terms
        </Link>
        <span>|</span>

        <Link   href="">
            Contact
        </Link>
        <span>|</span>

      </div>
    </div>
  )
}

export default footer
