import React from 'react'

export default function LearnMore () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-3xl lg:text-5xl font-extrabold font-sans text-shadow-lg text-purple-400 mb-8'>
           <span className="text-purple-700">Learn More</span> <span className='text-purple-500'>about</span> Ed&apos;s Inventory Management
          </h1>
          <h3 className="text-lg lg:text-2xl mb-4  font-bold text-purple-600 text-shadow-lg font-sans">The Future of Inventory Management</h3>
          <p className='text-sm text-gray-700 font-semibold text-shadow-sm mb-10 max-w-2xl mx-auto px-8 lg:px-0 '>
            Imagine a world where inventory management is seamless and efficient with clear visualizations and real-time data. Our system is designed to provide you with the insights you need to make informed decisions and optimize your inventory processes. <br /> <br/> <span className=" font-semibold text-gray-500 text-shadow-none mt-3">Get started by navigating to the inventory dashboard
             or  adding new items to your inventory.</span>
          </p>
        </div>
     </div>
    </div>

  )
}