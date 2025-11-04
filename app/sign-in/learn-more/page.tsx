import React from 'react'
import Image from "next/image"

export default function LearnMore () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-purple-50">

      <div className="relative bg-gray-300 xs:hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover opacity-30 bg-gradient-to-l from-purple-600 via-indigo-300 to-purple-800">

          </div>
          {/*  <Image
            className="w-full h-full object-cover opacity-30"
            src="/img-1.png"
            alt="Team working"
            width={100} height={100}
          />   THIS IS FOR AN IMAGE BACKGROUND SETUP FOR THE HEADER ONCE I FIND ONE*/}
          
        </div>
          <div className="absolute hidden sm:block">
            <Image
              src="/logox.png"
              alt="logo"
              className='w-72 h-26 m-8'
              width={250}
              height={45}
              loading='lazy'
            />
          </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-12 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-fuchsia-500 via-fuchsia-800 to-indigo-700 bg-clip-text mt-12">
            Learn More About Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-transparent bg-gradient-to-r from-purple-900 via-fuchsia-800 to-purple-200 bg-clip-text">
            Our story, values, and the people behind our success.
          </p>
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
          <div className='mb-15'>
            <h2 className='mt-15 text-4xl font-semibold text-gray-800'>Our Mission</h2>
            <p className='mt-4 text-medium text-lg text-gray-500'>To deliver cutting edge solutions and better inventory management for  our clients. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam corporis similique ratione quae voluptate aliquid odit, asperiores deleniti, ducimus architecto molestias illum unde nihil, ipsum ad. Laudantium, ratione voluptatum!</p>
          </div>

          {/*for side by side image*/}
          <div className='py-6'>
            <Image 
              className=' w-full h-full rounded-xl shadow-lg '
              src="https://images.unsplash.com/photo-1700727448575-6f1680cd7d75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331g"
              alt="pic"
              width={1400} height={750}
              style={{ objectFit: "cover" }}
              loading='lazy'
            />
          </div>
        </div>

        {/* Key Challenges Section */}

        <div className='mt-24 mb-24'>
          <h2 className='mt-4 text-4xl font-semibold text-gray-800 text-center'>Key Challenges</h2>
          <p className='mt-4 text-lg text-gray-600 font-medium text-center mx-6'>Managing inventory effectively can be a complex task, especially as businesses grow. Common challenges include tracking stock levels, forecasting demand, and ensuring timely reordering. Our platform is designed to address these issues head-on, providing users with the tools they need to streamline their inventory processes and make informed decisions.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
            <div className=' min-w-xs'>
              <h3 className='mt-6 font-semibold text-gray-800 border-b-2 border-gray-400 p-3'>Slow Inovation</h3>
              <p className='text-base text-gray-500 mt-4'>The time spent learning new tools, ramping up developers, and coordinating multi-team deployments creates barriers to rapid innovation.</p>
            </div>

            <div className=' min-w-xs'>
              <h3 className='mt-6 font-semibold text-gray-800 border-b-2 border-gray-400 p-3 flex'>Lack of enterprise-grade features</h3>
              <p className='text-base text-gray-500 m-4'>This deficit translates into issues with navigating module availability, training IT to support open source software, and testing compatibility.</p>
            </div>

            <div className=' min-w-xs'>
              <h3 className='mt-6 font-semibold text-gray-800 border-b-2 border-gray-400 p-3'>24/7 availability support</h3>
              <p className='text-base text-gray-500 mt-4'>Our platform provides round-the-clock support to ensure smooth operations and fast record tracking and retrieval.</p>
            </div>

          </div>
        </div>

        {/*Key Benefits Section*/}

        <div className='mt-20 mb-16'>
          <h2 className='mt-4 text-4xl font-semibold text-gray-800 text-center' >Key Benefits</h2>
          <p className='mt-4 text-lg text-gray-600 font-semibold text-center'>Eds Inventory Management System offers numerous services that helps solve these <br/> challenges, offering the following benefits:</p>

          <div className='mt-16 mx-6'>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center'>

              <div className='rounded-xl p-12 shadow-xl backdrop-blur-2xl bg-gradient-to-tr from-purple-200 via-fuchsia-500/60 to-purple-100 items-center space-y-4 border-2 border-purple-300 '>
                <Image 
                  src="https://www.enterprisedb.com/sites/default/files/images/beacon/beacon_icon_performance_diagnostics.svg"
                  alt="Image description"
                  className='w-22 h-22 mx-auto'
                  width={100} height={100}
                  loading='lazy'
                />
                <h3 className='font-bold text-lg text-center'>Accelerate time to market</h3>
                <p className='text-base/6  text-center'>Improve reliability of high-demand apps, with up to 99.999% uptime by running active/active, geo-distributed data clusters.</p>
              </div>

              <div className='rounded-xl p-12 shadow-xl backdrop-blur-2xl bg-gradient-to-tr from-purple-200 via-indigo-500/60 to-purple-100 items-center space-y-4 border-2 border-indigo-200 '>
                <Image 
                  src="https://www.enterprisedb.com/sites/default/files/beacon_whitepapers.svg"
                  alt="Image description"
                  className='h-22 w-22 mx-auto'
                  width={75} height={75}
                  loading='lazy'

                />
                <h3 className='font-bold text-lg text-center'>Accelerate time to market</h3>
                <p className='text-base/6  text-center'>Improve reliability of high-demand apps, with up to 99.999% uptime by running active/active, geo-distributed data clusters.</p>
              </div>

              <div className='rounded-xl p-12 shadow-xl backdrop-blur-2xl bg-gradient-to-tr from-purple-200 via-blue-500/50 to-purple-100 items-center space-y-4 border-2 border-blue-200 '>
                <Image 
                  src="https://www.enterprisedb.com/sites/default/files/beacon_blog.svg"
                  alt="Image description"
                  className='h-22 w-22 mx-auto'
                  width={100} height={100}
                  loading='lazy'

                />
                <h3 className='font-bold text-lg text-center'>Accelerate time to market</h3>
                <p className='text-base/6  text-center'>Improve reliability of high-demand apps, with up to 99.999% uptime by running active/active, geo-distributed data clusters.</p>
              </div>
              
            </div>

          </div>
        </div>


            {/* Key Features Section */}
        <div className='mb-36 mt-36 '>
          <h2 className='text-4xl font-semibold text-gray-800 text-center'>Key Features</h2>

          <div className='mt-16 mx-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start'>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6 mr-6 p-3'>Just the headers the </h2> 
                <p className='font-medium text-xs text-gray-600 mt-4 mr-6  '>
                  Hey im writing something in multiple lines to test a theory 

                </p>
              </div>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6  mr-6  p-3'>Just the headers the </h2> 
                <p className='font-medium text-xs text-gray-600 mt-4  mr-6 '>
                  Hey im writing something in multiple lines to test a theory 

                </p>
              </div>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6  mr-6  p-3'>Just the headers the </h2> 
                <p className='font-medium text-xs text-gray-600 mt-4  mr-6  '>
                  Hey im writing something in multiple lines to test a theory 

                </p>
              </div>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6  mr-6  p-3'>Just the headers the </h2> 
                <p className='font-medium text-xs text-gray-600 mt-4  mr-6 '>
                  Hey im writing something in multiple lines to test a theory 

                </p>
              </div>


            </div>
          </div>

        </div>

        {/*Service and support Section*/}
        <div className='mt-36 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='py-6'>
              <Image 
                className=' w-full h-full rounded-xl shadow-lg '
                src="/img-02.png"
                alt="pic"
                width={1400} height={750}
                style={{ objectFit: "cover" }}
                loading='lazy'
              />
            </div>

            <div>
              <div className='mb-15'>
                <h2 className='mt-15 text-4xl font-semibold text-gray-800'>Services and Support</h2>
                <p className='mt-4 text-medium text-lg text-gray-500'>To deliver cutting edge solutions and better inventory management for  our clients. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veniam corporis similique ratione quae voluptate aliquid odit, asperiores deleniti, ducimus architecto molestias illum unde nihil, ipsum ad. Laudantium, ratione voluptatum!</p>
              </div>
            </div>

        </div>



      </div>{/*windowed*/}

    </div>
  )

     
}
