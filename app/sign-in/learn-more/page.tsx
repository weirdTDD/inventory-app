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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center '>
          <div>
            <h2 className='mt-10 text-4xl font-semibold text-gray-800'>Our Mission</h2>
            <p className='mt-4 text-base text-gray-500'>To deliver cutting edge solutions and better inventory management for  our clients. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam corporis similique ratione quae voluptate aliquid odit, asperiores deleniti, ducimus architecto molestias illum unde nihil, ipsum ad. Laudantium, ratione voluptatum!</p>
          </div>
          {/*for side by side image*/}
          <div className='py-6'>
            <Image 
              className=' w-full h-full rounded-xl shadow-lg '
              src="/img-1.png"
              alt="pic"
              width={100} height={100}/>
          </div>
        </div>

        <div className='mt-12 mb-12'>
          <h2 className='mt-4 text-4xl font-semibold text-gray-800 text-center'>Key Challenges</h2>
          <p className='mt-4 text-lg text-gray-600 font-semibold text-center'>Managing inventory effectively can be a complex task, especially as businesses grow. Common challenges include tracking stock levels, forecasting demand, and ensuring timely reordering. Our platform is designed to address these issues head-on, providing users with the tools they need to streamline their inventory processes and make informed decisions.</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
            <div className=''>
              <h3 className='mt-6 font-semibold text-gray-800 border-b-2 border-gray-500 p-3'>Slow Inovation</h3>
              <p className='text-base text-gray-500'>The time spent learning new tools, ramping up developers, and coordinating multi-team deployments creates barriers to rapid innovation.</p>
            </div>

            <div>
              <h3 className='mt-6 font-semibold text-gray-800 border-b-2 border-gray-500 p-3'>Lack of enterprise-grade features</h3>
              <p className='text-base text-gray-500'>This deficit translates into issues with navigating module availability, training IT to support open source software, and testing compatibility.</p>
            </div>

            <div className=''>
              <h3 className='mt-6 font-semibold text-gray-800 border-b-2 border-gray-500 p-3'>24/7 availability support</h3>
              <p className='text-base text-gray-500'>Our platform provides round-the-clock support to ensure smooth operations and fast record tracking and retrieval.</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )

     
}