import { ArrowUpNarrowWide, BarChart3, ChartCandlestick, ChartLine, CircleCheckBig, MessageSquarePlusIcon, MonitorSmartphone, ShieldOff, Star, StarIcon, TrendingUp } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { isContext } from "node:vm";

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
    icon:ChartCandlestick
  },
  {id:3,
    title:"Easy Accessibility",
    description:"Users can monitor, access and add data from any device, anywhere, and at any time with our cloud based inventory management system.",
    icon:MonitorSmartphone
  },
  {id:4,
    title:"Data Privacy Policies",
    description:"With our secure database management systems, your data and business information are well protected. We prioritize data privacy over everything else",
    icon:ShieldOff
  },
]


interface chooseUsProps {
  id: number;
  title:string;
  description:string;
  icon: React.ComponentType<{ className?: string }>
}

const chooseUs : chooseUsProps[ ]  = [
  {id:1,
    title:"Streamlined Operations:",
    description:"Our system automates key workflows, minimizing manual effort and  errors.",
    icon:CircleCheckBig
  },
  {id:2,
    title:"Cost Reduction:",
    description:"We help you reduce carrying costs and avoid stockouts.",
    icon:CircleCheckBig
  },
  {id:3,
    title:"Improved Efficiency:",
    description:"Our powerful analytics tools enable teams to work more efficiently in data-driven evironment.",
    icon:CircleCheckBig
  },
  {id:4,
    title:"Gain Control:",
    description:"Forecast demand accurately and manage stock levels proactively with more ease than ever.",
    icon:CircleCheckBig
  },
]

  interface TestimonialsProps {
    id: number;
    name: string;
    role:string;
    company:string;
    testimonial:string;
    rating:number;
    Image?: string | undefined;
  }

  const testimonials : TestimonialsProps[] = [
    {id:1,
      name:"Charlotte S.",
      role:"Operations Manager",
      company:"Consar Ltd, Accra-Ghana",
      testimonial:"Eds Inventory Management is cost a effective solution to what would otherwise be a very expensive problem for us. It provides Consar Ghana with an essential ability to track stocks availability across multiple locations. ",
      rating:4,
      Image:""
    },
        {id:2,
      name:"Amanda A. Ofori",
      role:"Project Coordinator",
      company:"Bel Company Ltd, Tema-Ghana",
      testimonial:"Eds Inventory Management Systems completely changed the way our store runs. We now track products in real time with zero stress. Our team saves hours every week because everything is finally organized and automated. ",
     rating:5,
      Image:""
    },
        {id:3,
      name:"Samuel Agyekum",
      role:"Teritory Manager",
      company:"Kasapreko Company Ltd, Accra-Ghana",
      testimonial:"Eds Inventory Management system is lightning fast, easy to use, and accurate. Edward built a tool that even my least tech-savvy workers feel confident using. It has improved our daily operations more than any software we tried before.",
       rating:5,
      Image:""
    },
        {id:4,
      name:"Nana Ama Agyei",
      role:"Small Business Owner",
      company:"Consar Ltd, Accra-Ghana",
      testimonial:"I was looking for something simple but powerful and Eds Inventory System delivered exactly that. It handles product tracking, updates, and reporting effortlessly. This system is a lifesaver.",
      rating:4,
      Image:""
    },
        {id:5,
      name:"Irene Addison",
      role:"Business Consultant",
      company:"Consar Ltd, Accra-Ghana",
      testimonial:"I recommend Eds Inventory Management Systems to all my clients. It brings structure, transparency, and efficiency to any business dealing with products. This is professional-grade software with simplicity.",
      rating:3,
      Image:"" 
    },
        {id:6,
      name:"Richmond K.",
      role:"E-Commerce Business Owner",
      company:"Soraid Ltd, Kumasi-Ghana",
      testimonial:"Before Eds Inventory System, stockouts and over-ordering were constant problems. Now I get alerts, clear dashboards, and full control at any time. My business runs smoother and more profitably.",
      rating:5,
      Image:""
    },

  ]


export default function Home () {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center'>
      <div className="max-w-7xl mx-auto px-4 ">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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
                loading="lazy"
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

      
        {/* Features Section */}
        <div className="mx-auto py-16">
          <div className="mb-12 mt-12">
            <h2 className="text-gray-800 font-semibold text-4xl text-center">Contributing Key Features</h2>
            <p className="text-xl text-gray-700 font-semibold max-w-4xl mx-auto text-center mt-4">Discover the key features that make our inventory management system stand out, drive efficiency and make it perfect for your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4 lg:gap-8 mx-auto">
              {features.map(({id, title, description, icon}) =>{
                const Icon = icon;
                return(
                  <div key={id} className="flex flex-col items-center bg-purple-100 border border-purple-300 rounded-lg shadow-lg p-6 m-3 hover:scale-105 transform transition-transform">
                    <Icon className="w-auto h-auto mb-6 text-green-400"/>
                    <h3 className="text-xl font-semibold text-gray-800 text-center  mb-2 ">{title}</h3>
                    <p className="text-base/6 text-gray-600 text-pretty border-t-2 border-gray-400 pt-2 text-center ">{description}</p>

                  </div>
                )
              }
            )}
          </div>

        </div>

        {/*Why Choose Us Section*/}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
            <div className="flex items-center">
              <Image 
                src ="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                alt=""
                width={1200}
                height={800}
                className="w-full object-cover  rounded-xl drop-shadow-lg"
              />
            </div>

            <div className="text-center lg:text-left mx-auto">
              <h2 className="text-4xl text-gray-800 text-center font-bold "> Why Choose Us?</h2>
              <h3 className="text-xl text-gray-700 font-semibold mt-4 mb-4">We offer a comprehensive inventory management system that streamlines your operations, reduces costs, and improves overall efficiency.</h3>

              <ul className="space-y-3 text-left font-medium mt-8 ">
                {chooseUs.map(({id, title,description, icon}) =>{
                  const Icon= icon;
                  return(
                    <li key={id} className="flex justify-items-start gap-2 text-gray-700"> 
                      <Icon className="w-7 h-7 gap-4 space-x-3 text-green-500 mt-"/>
                      <div className="flex-1 items-center justify-center">
                        <strong className="w-full text-gray-800">{title}</strong> 
                        <p className="w-full text-sm text-gray-600">{description}</p>
                      </div>
                      
                    </li>
                  )
                })}
              </ul>

            </div>



          </div>  
                    <hr className="border-t border-gray-300 drop-shadow-lg/50 mx-auto"/>
        </div>

        {/*Testimonials Section*/}
        <div className="mx-auto py-16">
          <div className="mb-12 mt-12">
            <h2 className="text-4xl font-bold text-center  text-gray-800">What Our <span className="text-purple-700">Clients Say</span></h2>
            <p className="text-gray-600 text-lg font-semibold text-center mt-6 max-w-2xl mx-auto">
              Hear from some of the world&apos;s most inspirational organisations already using <span className="text-purple-700">Ed&apos;s</span> Inventory Management to track and manage their assets.
            </p>
          </div>


          <div className="flex items-center justify-center gap-12 mt-10 mb-26 ">
            <div className="flex flex-row gap-8 items-center">
              <MessageSquarePlusIcon
                className="text-amber-700 fill-amber-600 mb-2"
               width={40} height={40}
               />

              <div className="flex flex-col items-start mb-3 ">
                <div className="">
                  <h2 className=" text-base text-gray-500">4.8 of 5</h2>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) =>(
                    <StarIcon key={i} className="text-amber-400 fill-amber-400"/>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-8 items-center">
              <Image
                src="/google-play-store.svg"
                alt=""
                width={40} height={40}
                className=""
              />

              <div className="flex flex-col items-start mb-3 ">
                <div className="">
                  <h2 className=" text-base text-gray-500">4.8 of 5</h2>
                </div>

                <div className="flex">
                  {[...Array(5)].map((_, i) =>(
                    <StarIcon key={i} className="text-amber-400 fill-amber-400"/>
                  ))}
                </div>
              </div>
          </div>

          </div>
          


          <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
              {testimonials.map(({id, name, role, company, testimonial,}) =>{
                
                return(
                  <div key={id} className="flex flex-col bg-purple-50 border border-purple-200 hover:scale-105 transform transition-transform rounded-lg shadow-lg space-y-1 px-6 py-2">
                    <div className="py-4 flex flex-row items-start mr-8">
                      <Image
                        src="/users.png"
                        alt=""
                        width="25" height="25"
                        className= "w-12 h-12 rounded-full object-fill"
                      />
                      <div className="px-2  flex flex-col items-start ">
                        <h3 className="text-gray-800">
                          <strong>{name}</strong>
                        </h3>
                        <div className="flex-1 items-start gap-2 text-left font-normal text-sm text-gray-500">
                          <p className="text-sm">{role}</p> 
                          <p className="text-xs">{company}</p>
                        </div>
                      </div>
                      
                    </div>

                    <p className="text-gray-600 text-base/6 font-semibold text-wrap">{testimonial}</p>
                  

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
