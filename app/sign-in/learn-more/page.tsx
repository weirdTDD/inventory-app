import React from 'react'
import Image from "next/image"

export default function LearnMore () {
  return (
    <div>

      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            className="w-full h-full object-cover opacity-30"
            src="/img-1.png"
            alt="Team working"
            width={100} height={100}
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn More About Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Our story, values, and the people behind our success.
          </p>
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-col-2 lg:gap-8'>
          <div>
            <h2>Our Mission</h2>
            <p>To deliver cutting edge solutions and better inventory management for  our clients.</p>
          </div>
          {/*for side by side image*/}
          <div>

          </div>
        </div>

        <div className='mt-12'>

        </div>
      </div>

    </div>
  )

     
}