import Image from "next/image"
import Link from "next/link"


export default function Home () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center'>
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center lg:text-left'>
          <h1 className='inline-block text-4xl lg:text-5xl font-extrabold font-sans bg-gradient-to-r from-purple-900 via-indigo-600 to-purple-400 bg-clip-text text-transparent p-4 mb-8'>
           <span className="">Ed&apos;s</span> Inventory Management
          </h1>
          <h3 className="text-lg lg:text-2xl mb-4  font-bold text-purple-600 text-shadow-lg font-sans">Your perfect Management system</h3>
          <p className='text-sm text-gray-700 font-semibold text-shadow-sm mb-10 max-w-2xl mx-auto px-8 lg:px-0 '>
            Streamline your inventory tracking and management with our intuitive
            system. Keep tabs on stock levels, tracking orders, managing orders, and generating detailed
            reports with ease. <br /> <br/> <span className=" font-semibold text-gray-500 text-shadow-none mt-3">Get started by navigating to the inventory dashboard
             or  adding new items to your inventory.</span>
          </p>
          
          <div className='flex gap-6 justify-center lg:justify-start'>
            <Link 
            href="/sign-in"
            className= " bg-purple-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-purple-800 shadow-xl transition-colors "
            >
              Sign In
            </Link>
            <Link
              href="/learn-more"
              className="border-2 border-purple-300 bg-purple-200 text-gray-600 hover:text-white px-4 py-2 rounded-lg font-semibold shadow-xl hover:bg-purple-500 transition-colors "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Image 
          src="/img-05.png"
          alt="inv"
          width={1200}
          height={800}
          className="w-full object-cover"
        />

      </div>

      </div>
      
    </div>
  )
}

