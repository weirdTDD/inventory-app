import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react"
import Link from "next/link"



export default function Sidebar({
    currentPath = "/dashboard",
}:{
    currentPath: string;
    
}){

    const navigation = [
       { name:  "Dashboard", href: "/dashboard", icon: BarChart3},
         { name:  "Inventory", href: "/inventory", icon: Package},
            { name:  "Add Products", href: "/add-products", icon: Plus},
                { name:  "Settings", href: "/settings", icon: Settings},
    ]


    return(
        <div className="fixed left-0 right-0  bg-purple-700 text-white w-72 min-h-screen p-6 z-10 ">
            <div className="border-b border-gray-400 mb-12 py-6 text-center">
             <div className="flex items-center gap-3">
                <BarChart3 className="w-9 h-9"/>
                <span className="text-2xl font-bold ">Inventory Management</span>
             </div>
            </div>

            <nav>
                <div>
                    {navigation.map((item, key) =>{

                     const isActive =  currentPath === item.href;

                        return(
                            <Link 
                            key={key}
                            href={item.href}
                            className={`flex items-center gap-3 p-3 mt-6 rounded-lg transition-colors ${isActive ? "bg-purple-900  font-bold shadow-xl" : "hover:bg-purple-600"}`}
                            >
                                <item.icon className="w-5 h-5"/>
                                <span className="font-medium ">{item.name}</span>
                            </Link> 
                        )
                    })}
                </div>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-500 mx-6 ">
                <div className="flex items-center justify-between font-semibold">
   {/*                 <UserButton showUserInfo />  */}
                </div>
            </div>
        </div>
    );
}
