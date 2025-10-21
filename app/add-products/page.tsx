import Link from "next/link";
import Sidebar from "../../components/sidebar";
import { getCurrentUser } from "../../lib/auth"
import { createProduct } from "../../lib/products";

export default  async function addProductPage ()  {

    const user = await getCurrentUser()

    return (
        <div className="min-h-screen bg-gray-200">
            <Sidebar currentPath="/add-products"/>
            <main className="ml-74 p-8">
                <div className="flex items-center justify-between">
                <div className="mb-8">
                    <div>
                       <h1 className="text-2xl font-bold text-gray-700 mb-4">Add Products</h1>
                       <p className="text-sm font-semibold text-gray-500">
                        Simply add new products, stack up your inventory and ensure all your products are always up to date.
                       </p>
                    </div>
                    <div className="max-w-2xl">
                        <div className="bg-white rounded-lg border border-gray-300 p-6">
                            <form action ={createProduct} className="space-y-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2"> Product Name * </label>
                                    <input type="text" name="name" id="name" required placeholder="Enter product name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" />
                                </div>
                                 {/* Double grids on medium devices */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                    <div>
                                    <label htmlFor="price" className="block text-sm text-gray-700 mb-2">Quantity *</label>
                                    <input 
                                        type="number" 
                                        name="quantity" 
                                        id="quantity" 
                                        required 
                                        step="1.0"
                                        min="0"
                                        placeholder="Enter product quantity" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="quantity" className="block text-sm text-gray-700 mb-2"> Price * </label>
                                    <input 
                                        type="number" 
                                        name="price" 
                                        id="price" 
                                        step="0.01" 
                                        min="0" 
                                        required 
                                        placeholder="0.0" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" 
                                    />
                                </div>
                                </div>
                                <div>
                                    <label htmlFor="sku" className="block text-sm text-gray-700 mb-2"> SKU (optional) </label>
                                    <input 
                                        type="number" 
                                        name="sku" 
                                        id="sku" 
                                        required 
                                        placeholder="Enter SKU" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lowStockAt" className="block text-sm text-gray-700 mb-2"> Low Stock At (optional)</label>
                                    <input 
                                        type="number" 
                                        name="lowStockAt" 
                                        id="lowStockAt"  
                                        required 
                                        min = "0"
                                        placeholder="Enter low stock" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent" 
                                    />
                                </div>

                                <div className="flex gap-6">
                                    <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
                                        Add Product
                                    </button>

                                    <Link href = "../inventory"  className="border-2 border-gray-400 bg-gray-300 hover:bg-gray-500 text-gray-900 px-10 py-3 rounded-lg">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            </main>

        </div>
    );

    
}