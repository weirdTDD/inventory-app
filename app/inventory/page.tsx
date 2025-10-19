import Sidebar from "../../components/sidebar";
import { getCurrentUser } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { deleteProduct } from "../../lib/products";

export default async function InventoryPage() {

    const user = await getCurrentUser();
    const userId = user.id;
    const totalProducts = await prisma.product.findMany({ where: { userId } });
    

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


                {/* Search Bar */}
                <div className="bg-white rounded-lg border border-purple-400">
                    <form action="/inventory" className="flex gap-6" method="GET">
                        <input type="text" name="q" placeholder="Search products..." className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none " />
                        <button type="submit" className="bg-purple-500 text-white rounded-md px-6 py-2">Search</button>
                    </form>
                </div>


                {/*Products Table*/}
                <div className="bg-purple-200 rounded-md border border-purple-400 overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">SKU</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Low Stock At</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>

                            </tr>
                        </thead>
                        <tbody className="bg-white/50 divide-y divide-gray-200">
                            {totalProducts.map((product, key) => (
                                <tr key={key}>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.sku || "-"}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">${Number(product.price).toFixed(2)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.quantity}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{product.lowStockAt || "-"}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <form action={async (data: FormData) => {
                                            "use server";
                                            await deleteProduct(data);
                                        }}>
                                            <input type="hidden" name="id" value={product.id} />
                                            <button className="bg-red-500 py-2 px-6 rounded-md text-sm text-white hover:translate-y-1.5 hover:bg-red-800">Delete</button>
                                        </form>
                                    </td>


                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            </div>
            </main>
        </div>
    )
}