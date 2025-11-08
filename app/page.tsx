import { ArrowUpNarrowWide, BarChart3, ChartLine, MonitorSmartphone, ShieldOff, TrendingUp } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

interface HeaderProps {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>
}

const header: HeaderProps[] = [
  {id:1, title:"+12k", subtitle:"Personalised  users", icon:TrendingUp},
  {id:2, title:"70%", subtitle:"Productivity", icon:ArrowUpNarrowWide},
  {id:3, title:"10x", subtitle:"Real-time Analytics", icon:BarChart3},

];

interface FeaturesProps {
  id: number;
  title:string;
  description:string;
  icon: React.ComponentType<{ className?: string }>
}

const features: FeaturesProps[] = [
  {id:1,
    title:"Real-time Tracking",
    description:"Monitor your inventory levels in real-time with instant updates on stock movements, ensuring you always have accurate data at your fingertips.",
    icon:ChartLine
  },
  {id:2,
    title:"Business Intelligent Dashboard",
    description:"Gain insights into your business performance with our comprehensive dashboard, featuring key metrics and analytics.",
    icon:ChartLine
  },
  {id:3,
    title:"Easy Accessibility",
    description:"Monitor and add data from any device, anywhere, and at any time with our cloud based inventory management system.",
    icon:MonitorSmartphone
  },
  {id:4,
    title:"Data Privacy Policies",
    description:"With our secure database management systems, your data is safe with us. We prioritize data over everthing else",
    icon:ShieldOff
  },
]


export default function Home () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center'>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center items-center lg:text-left'>
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
          
          <div className='mt-22 flex gap-6 justify-center lg:justify-start'>
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

      
      <div className="flex flex-col items-center ">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center justify-center py-10">
            <Image 
              src="/img-05.png"
              alt="inv"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 items-center  gap-4 mx-auto flex-none justify-center">
            {header.map(({id, title, subtitle, icon}) =>{
              const Icon = icon;
              return(
                <div key={id} className="flex flex-col items-center bg-purple-100 border border-purple-200 rounded-lg shadow-lg p-3 m-3 text-center hover:scale-105 transform transition-transform">
                  <div className="flex flex-row items-center gap-4 mb-2">
                    <Icon className="text-green-400 "/>
                    <h4 className="font-black text-gray-800">{title}</h4>
                  </div>

                  <div className="">
                    <p className="text-xs lg:text-sm font-medium text-gray-500">{subtitle}</p>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>

      </div>
      
    </div>
  )
}

