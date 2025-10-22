"use client";

import Link from "next/link";
import Sidebar from "../../components/sidebar";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useTransition } from "react";
import { createProduct } from "../../lib/products";

export default function AddProductForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await createProduct(formData);

      if (result?.success) {
        toast.success("✅ Product Added!", {
          style: { background: "#7C3AED", color: "#fff" },
        });
        setTimeout(() => router.push("/inventory"), 1500);
      } else {
        toast.error(result?.error || "❌ Failed to add product");
      }
    });
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Sidebar currentPath="/add-products" />
      <main className="ml-74 p-8">
        <div className="flex items-center justify-between">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">
              Add Products
            </h1>
            <p className="text-sm font-semibold text-gray-500 mb-6">
              Simply add new products, stack up your inventory and ensure all your products are always up to date.
            </p>

            <div className="bg-white rounded-lg border border-gray-300 p-6">
              <form action={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter product name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm text-gray-700 mb-2">
                      Quantity *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      required
                      min="0"
                      placeholder="Enter quantity"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm text-gray-700 mb-2">
                      Price *
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      required
                      step="0.01"
                      min="0"
                      placeholder="0.0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sku" className="block text-sm text-gray-700 mb-2">
                    SKU (optional)
                  </label>
                  <input
                    type="text"
                    name="sku"
                    id="sku"
                    placeholder="Enter SKU"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="lowStockAt" className="block text-sm text-gray-700 mb-2">
                    Low Stock At (optional)
                  </label>
                  <input
                    type="number"
                    name="lowStockAt"
                    id="lowStockAt"
                    min="0"
                    placeholder="Enter low stock"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
                  />
                </div>

                <div className="flex gap-6">
                  <button
                    type="submit"
                    disabled={isPending}
                    className={` px-6 py-3 rounded-lg font-medium transition ${
                      isPending
                        ? "bg-purple-400 cursor-not-allowed"
                        : "bg-purple-500 hover:bg-purple-600 text-white"
                    }`}
                  >
                    {isPending ? "Adding..." : "Add Product"}
                  </button>

                  <Link
                    href="/inventory"
                    className="border-2 border-gray-400 bg-gray-300 hover:bg-gray-400 text-gray-900 px-10 py-3 rounded-lg"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}
