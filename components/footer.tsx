import Link from 'next/link';
import React from 'react'

export default function Footer () {

    const currentYear = new Date().getFullYear();

  return (
    <div className='bg-purple-900 text-white'>
      <div className='text-center py-4 '>
        <div className='max-w-7xl mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-around  mx-6 lg:mx-auto my-6 px-6  border-2 border-b-amber-500">
            <div className='grid grid-cols-1 text-left py-6'>

                <ul>
                    <li>Eds Inventory Management HQ</li>
                    <li>Planners Avenue | Okpoi-Gonno</li>
                    <li>Spintex-Road, Accra</li>
                </ul>
            </div>

            <div className='grid grid-cols-1 text-left  py-6'>
                <ul>
                    <li>Eds Inventory Management HQ</li>
                    <li>Planners Avenue | Okpoi-Gonno</li>
                    <li>Spintex-Road, Accra</li>
                </ul>
            </div>

            <div className='grid grid-cols-1 text-left  py-6'>
                <ul>
                    <li>Eds Inventory Management HQ</li>
                    <li>Planners Avenue | Okpoi-Gonno</li>
                    <li>Spintex-Road, Accra</li>
                </ul>
            </div>

        </div>
        <div className= "grid grid-cols-3 items-center max-w-xl mx-auto py-8">
            <div className='space-x-8'>
                <Link className=''  href="">
                    Privacy
                </Link>
                <span>|</span> 
            </div>

            <div className='space-x-8'>
                <Link className=''  href="">
                    Terms
                </Link>
                <span>|</span> 
            </div>

            <div className='space-x-8'>
                <Link className=''  href="">
                    Contact
                </Link>
                <span>|</span> 
            </div>
        </div>

        <p>Copyright {currentYear}, EdsInventory Management. All Rights Reserved.</p>

      </div>
      </div>
    </div>
  )
}

