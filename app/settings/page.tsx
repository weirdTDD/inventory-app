import { AccountSettings } from "@stackframe/stack";
import Sidebar from "../../components/sidebar";




export default function settingsPage () {

    return (
    
        <div className="min-h-screen bg-gray-100">
            <Sidebar currentPath="/settings" />
            <main className="ml-72 p-8">
                <div className="flex items-center justify-between">
                    <div className="mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-700 mb-4">Account Settings</h1>
                            <p className="text-sm font-semibold text-gray-500">
                              Manage your account settings and preferences.
                            </p>
                        </div>
                        
                    </div>
                </div>

                <div className="max-w-7xl ">
                    <div className="bg-white/10 rounded-lg border border-gray-200 p-6">
                        <AccountSettings fullPage />
                    </div>
                </div>
            </main>
         
        </div> 
       
    )
} 