import React from 'react'
import Image from "next/image"
import Link from 'next/link'

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
          <div className='absolute sm:hidden flex flex-col ml-2 min-w-full'>
            <Image
              src="/logox.png"
              alt="logo"
              className='w-42 h-18 m-4'
              width={150}
              height={30}
              loading='lazy'
            />
            <div className=' flex items-center justify-between gap-6 mx-4'>
              <h1 className=' text-xl font-semibold bg-gradient-to-r from-fuchsia-500 via-fuchsia-800 to-indigo-700 bg-clip-text mt-10 text-transparent'>Learn More about us</h1>

              <Link 
                href="/sign-in"
                className= " mt-10 bg-purple-600 text-base text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-800 shadow-xl transition-colors "
                >
                Sign In
              </Link>
            </div>
          </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-12 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-fuchsia-500 via-fuchsia-800 to-indigo-700 bg-clip-text mt-12 hidden sm:block">
            Learn More About Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-bold text-transparent bg-gradient-to-r from-purple-900 via-fuchsia-800 to-purple-200 bg-clip-text hidden sm:block">
            Our story, values, and the people behind our success.
          </p>
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
          <div className='mb-15'>
            <h2 className='mt-15 text-4xl font-semibold text-gray-800'>Our Mission</h2>
            <p className='mt-4 text-medium text-lg md:leading-7 text-gray-500'>To empower businesses with effortless inventory control, transforming complex stock management into simple, actionable insights that drive growth and eliminate operational headaches while delivering cutting edge solutions and better inventory management for  our clients.</p>
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

        <div className='mt-36 mb-24'>
          <h2 className='mt-4 text-4xl font-semibold text-gray-800 text-center'>Key Challenges</h2>
          <p className='mt-4 mb-4 text-lg text-gray-600 font-medium text-center mx-8'>Managing inventory effectively can be a complex task, especially as businesses grow. Common challenges include tracking stock levels, forecasting demand, and ensuring timely reordering. Our platform is designed to address these issues head-on, providing users with the tools they need to streamline their inventory processes and make informed decisions.</p>

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

          <hr className ="border-t  border-gray-300 drop-shadow-lg/50 mt-24 my-4"></hr>

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
                <h3 className='font-bold text-lg text-center'>Prevent Revenue Loss & Stockouts</h3>
                <p className='text-base/6  text-justify'>Maintain and prevents lost sales and costly stockouts by automatically monitoring your inventory and alerting you to reorder products before they run out maintaining optimal stock levelsand meet customer demands.</p>
              </div>

              <div className='rounded-xl p-12 shadow-xl backdrop-blur-2xl bg-gradient-to-tr from-purple-200 via-indigo-500/60 to-purple-100 items-center space-y-4 border-2 border-indigo-200 '>
                <Image 
                  src="https://www.enterprisedb.com/sites/default/files/beacon_whitepapers.svg"
                  alt="Image description"
                  className='h-22 w-22 mx-auto'
                  width={75} height={75}
                  loading='lazy'

                />
                <h3 className='font-bold text-lg text-center'>Make Smarter Business Decisions</h3>
                <p className='text-base/6  text-justify'>It turns your inventory data into actionable business intelligence, giving you clear insights into your top-selling items, total inventory value, and sales trends to guide smarter purchasing decisions.</p>
              </div>

              <div className='rounded-xl p-12 shadow-xl backdrop-blur-2xl bg-gradient-to-tr from-purple-200 via-blue-500/50 to-purple-100 items-center space-y-4 border-2 border-blue-200 '>
                <Image 
                  src="https://www.enterprisedb.com/sites/default/files/beacon_blog.svg"
                  alt="Image description"
                  className='h-22 w-22 mx-auto'
                  width={100} height={100}
                  loading='lazy'

                />
                <h3 className='font-bold text-lg  text-center'>Save Time & Increase Efficiency</h3>
                <p className='text-base/6 text-justify'>Saves you significant time and reduces operational headaches by allowing you to manage your entire stock seamlessly from any device, eliminating manual counts and complex spreadsheets.</p>
              </div>
              
            </div>

          </div>


            <hr className ="border-t  border-gray-300 drop-shadow-lg/50 mt-24 my-4"></hr>
          
        </div>


            {/* Key Features Section */}
        <div className='mb-26 mt-26'>
          <h2 className='text-4xl font-semibold text-gray-800 text-center'>Key Features</h2>

          <div className='mt-16 mx-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start'>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6 mr-6 text-center p-3'>Automated Inventory Tracking</h2> 
                <p className='font-medium text-base/6 text-gray-600 mt-4 mr-6  '>
                  The system continuously monitors your stock levels in real-time and automatically alerts you when products are running low, preventing lost sales from out-of-stock items. 

                </p>
              </div>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6  mr-6 text-center p-3'>Business Intelligence Dashboard</h2> 
                <p className='font-medium text-base/6 text-gray-600 mt-4  mr-6 '>
                  Get instant visibility into your inventory performance with key metrics like total inventory value, sales trends, and stock efficiency - all displayed in easy-to-understand charts and graphs.

                </p>
              </div>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6  mr-6 text-center p-3'>Anywhere Access & Management</h2> 
                <p className='font-medium text-base/6 text-gray-600 mt-4  mr-6  '>
                   Manage your entire inventory from any device - whether you&apos;re in the warehouse with your phone, in the office on your computer, or checking stock from a tablet at home. 

                </p>
              </div>

              <div className='min-w-3xs'>
                <h2 className='border-b-2 border-gray-400 font-semibold text-lg mt-6  mr-6 text-center p-3'>Secure Business Data Protection</h2> 
                <p className='font-medium text-base/6 text-gray-600 mt-4  mr-6 '>
                  Your inventory data and business analytics are completely private and protected, ensuring competitors can&apos;t see your stock levels, product values, or business performance metrics.

                </p>
              </div>


            </div>
          </div>

          <hr className ="border-t  border-gray-300 drop-shadow-lg/50 mt-24"></hr>

        </div>

        {/*Service and support Section*/}
        <div className='mt-26 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
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
