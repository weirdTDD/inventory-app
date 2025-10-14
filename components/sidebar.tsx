import { BarChart3, Package, Plus, Settings } from "lucide-react"

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
        <div className="fixed left-0 right-0  bg-purple-700 text-white w-[27%] min-h-screen p-6 z-10 ">
            <div>
             <div className="flex items-center gap-4">
                <BarChart3 className="w-9 h-9"/>
                <span className="text-2xl font-bold">Inventory Management</span>
             </div>
            </div>

            <nav>
                <div>
                    {navigation.map((item, key) =>{
                        return(
                            <a 
                            key={key}
                            href={item.href}
                            className={`flex items-center gap-3 p-3 mt-6 rounded-lg hover:bg-purple-600 transition-colors ${currentPath === item.href ? "bg-purple-800" : ""}`}
                            >
                                <item.icon className="w-5 h-5"/>
                                <span className="font-medium">{item.name}</span>
                            </a> 
                        )
                    })}
                </div>
            </nav>
        </div>
    );
}