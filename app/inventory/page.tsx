import Pagination from "../../components/pagination";
import Sidebar from "../../components/sidebar";
import { getCurrentUser } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { deleteProduct } from "../../lib/products";

export default async function InventoryPage({
    searchParams,
}: {searchParams: Promise<{ q?: string; page?: string }>;

}) {

    const params = await searchParams;
    const q = (params.q ?? "").trim();

    const user = await getCurrentUser();
    const userId = user.id;

    const pageSize = 5;
    const page = Math.max(1, Number(params.page ?? 1));


     const where = {
        userId,
        ...( q ? {name: { contains: q, mode: "insensitive" as const }} : {}),
    }
   

    const [totalCount, items] = await Promise.all([
        prisma.product.count({ where }), 
        prisma.product.findMany({
            where,
            orderBy:{ createdAt: "desc" },
            skip: (page-1) * pageSize,
            take: pageSize,
    }),
    ]);



    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
 
    

    return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar currentPath="/inventory" />
     {/* ml-0 on mobile, ml-72 on md+; reduced padding on small screens */}
     <main className="ml-0 md:ml-72 p-4 md:p-8">
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
          <div className="bg-white rounded-lg gap-4 p-4">
            <form action="/inventory" className="flex flex-col md:flex-row gap-4" method="GET">
              <input
                type="text"
                name="q"
                placeholder="Search products..."
                className="w-full md:w-5/6 border border-purple-300 rounded-lg p-2 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full md:w-1/6 bg-purple-500 text-white rounded-lg px-8 py-2 hover:shadow-2xl hover:bg-purple-700"
              >
                Search
              </button>
            </form>
          </div>

        {/* Products: responsive table for md+ and stacked cards for small screens */}
        <div className="bg-purple-200 rounded-md border border-purple-400 overflow-hidden">
          {/* Horizontal scroll wrapper for the table on small screens */}
          <div className="hidden md:block overflow-x-auto">
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
                {items.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.sku || "-"}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">${Number(product.price).toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.quantity}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{product.lowStockAt || "-"}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={product.id} />
                        <button className="bg-red-500 py-2 px-6 rounded-md text-sm text-white hover:translate-y-1.5 hover:bg-red-800">Delete</button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card list for mobile */}
          <div className="md:hidden p-4 space-y-3">
            {items.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{product.name}</div>
                    <div className="text-xs text-gray-500">SKU: {product.sku || "-"}</div>
                    <div className="text-xs text-gray-500">Price: ${Number(product.price).toFixed(2)}</div>
                    <div className="text-xs text-gray-500">Qty: {product.quantity}</div>
                    <div className="text-xs text-gray-500">Low stock at: {product.lowStockAt ?? "-"}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className="bg-red-500 text-white text-sm px-3 py-1 rounded">Delete</button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
         {/* pagination and rest */}
        {totalPages > 1 && (
          <div className="bg-white rounded-lg border border-gray-300 p-6">
            <Pagination
              currentPage ={page}
              totalPages ={totalPages}
              baseUrl = "/inventory" 
              searchParams = {{
                q,
                pageSize: String(pageSize),
              }}
            />
          </div>
        )}
      </main>
    </div>
   )

}
