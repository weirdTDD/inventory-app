import Sidebar from "../../components/sidebar";

export default function InventoryPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Sidebar currentPath="/inventory" />
            <main className="ml-72 p-8">
            <div className="flex items-center justify-between">
                <div className="mb-8">
                    <div>
                       <h1 className="text-2xl font-bold text-gray-700 mb-4">Inventory Management</h1>
                       <p className="text-sm font-semibold text-gray-500">
                        Keep track of your stock levels, manage product availability, and ensure your inventory is always up to date.
                       </p>
                    </div>
                    
                </div>
            </div>

            <div className="space-y-6">


                {/*Products Table*/}
                <div className="bg-purple-200 rounded-xl border border-purple-400 overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-mediumtext-gray-500 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-mediumtext-gray-500 uppercase">SKU</th>
                                <th className="px-6 py-3 text-left text-xs font-mediumtext-gray-500 uppercase">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-mediumtext-gray-500 uppercase">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-mediumtext-gray-500 uppercase">Low Stock At</th>
                                <th className="px-6 py-3 text-left text-xs font-mediumtext-gray-500 uppercase">Actions</th>

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                        </tbody>
                    </table>

                </div>
            </div>
            </main>
        </div>
    )
}