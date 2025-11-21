import Link from 'next/link';
import React from 'react'

export default function Footer () {

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

        <p>Copyright {currentYear}, EdsInventory Management. All Rights Reserved.</p>

      </div>
    </div>
  )
}

