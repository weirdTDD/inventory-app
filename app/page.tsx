import Link from "next/link"


export default function Home () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-shadow-lg text-gray-900 mb-8'>
            Inventory Management
          </h1>
          <p className='text-sm font-mono text-gray-600 text-shadow-sm mb-10 max-w-2xl mx-auto'>
            Streamline your inventory tracking and management with our intuitive
            system. Keep tabs on stock levels, tracking orders, managing orders, and generating detailed
            reports with ease. <br /><span className="font-semibold text-gray-400">Get started by navigating to the inventory dashboard
             or  adding new items to your inventory.</span>
          </p>
          
          <div className='flex gap-6 justify-center'>
            <Link 
            href="/sign-in"
            className= " bg-purple-600 text-white px-12 py-3 rounded-lg font-semibold hover:bg-purple-700 shadow-xl transition-colors "
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="border-2 border-purple-300 bg-purple-200 text-white px-8 py-3 rounded-lg font-semibold shadow-xl hover:bg-purple-700 transition-colors "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

