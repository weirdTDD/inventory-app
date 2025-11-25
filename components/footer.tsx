import Link from 'next/link';
import React from 'react'

export default function Footer () {

    const currentYear = new Date().getFullYear();

  return (
    <div className='bg-purple-900 text-white'>
      <div className='text-center py-4 '>
        <div className=' mx-[5%]'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 mx-6 lg:mx-auto my-6 px-6 text-xs ">

            <div className='grid grid-cols-1 text-left py-4 '>
                <h2 className='font-semibold mb-2'>About Us</h2>
                <p className='text-xs/6 text-nowrap'>Established in 2024 as a tool for tracking product <br/> purchases in an Limited Liability Company. <br/> EdsInventory Management in now well known for <br/> its business analytics in inventory management.</p>
                <a href="/learn-more" className='text-gray-500 underline underline-offset-4'> learn more</a>

            </div>
            <div className='grid grid-cols-1 text-left py-3 w-full lg:mx-12'>
                <h2 className='font-semibold mb-2'>Address</h2>
                <ul>
                    <li>Eds Inventory Management HQ</li>
                    <li>Planners Avenue | Okpoi-Gonno</li>
                    <li>Spintex-Road, Accra</li>
                    <li className='text-purple-900'>|</li>                 
                    <li className='text-purple-900'>|</li>                 

                </ul>
            </div>

            <div className='grid grid-cols-1 text-left  py-3'>
                <h2 className='font-semibold mb-2'>Call Us On</h2>
                <ul>
                    <li>Accra:  +233 50 000 0000</li>
                    <li>Kumasi: +233 20 000 0000</li>
                    <li className='text-purple-900'>|</li>                 
                    <li className='text-purple-900'>|</li>                 
                    <li className='text-purple-900'>|</li>                 
                </ul>
            </div>

            <div className='grid grid-cols-1 text-left  py-3'>
                <h2 className='font-semibold mb-2'>Email Us</h2>
                <ul>
                    <li>info@edsinventory.com</li>
                    <li className='text-purple-900'>|</li>
                    <li className='text-purple-900'>|</li>
                    <li className='text-purple-900'>|</li>                 
                    <li className='text-purple-900'>|</li>                 

                </ul>
            </div>

        </div>
        <div className= "grid grid-cols-3 items-center max-w-3xl mx-auto py-8 text-xs">
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
                <span className='text-purple-900'>|</span> 
            </div>
        </div>

        <p className='text-xs'>Copyright © {currentYear}, EdsInventory Management.</p>
        <p className='text-xs'> All Rights Reserved.</p>

      </div>
      </div>
    </div>
  )
}

