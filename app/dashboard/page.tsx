import React from 'react'
import Sidebar from '../../components/sidebar'
import { prisma } from '../../lib/prisma'
import { getCurrentUser } from '../../lib/auth'
import { TrendingUp } from 'lucide-react'
import ProductChart from '../../components/products-chart'

export default async function DashboardPage() {
    const user = await getCurrentUser();
    const userId = user.id

    {/* const [totalProducts, lowStock, allProducts] = await Promise.all([
        eg.prisma.product.count({ where: { userId } }),
        ]) */}


    const totalProducts = await prisma.product.count({ where: { userId } });

    const lowStock = await prisma.product.count({
        where: {
            userId: user.id,
            lowStockAt: { not: null },
            quantity: { lte: 5 }

        }
    });
    
    const recent = await prisma.product.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 6,
    });

    const allProducts = await prisma.product.findMany({
        where: { userId },
        select: { price: true, quantity: true, createdAt: true },
    });

    const now = new Date();
    const weeklyProductsData = []

    for (let i = 11; i >= 0; i--) {
        const weekStart = new Date(now)
        weekStart.setDate(weekStart.getDate() - i * 7)
        weekStart.setHours(0, 0, 0, 0)

        const weekEnd = new Date(weekStart)
        weekEnd.setDate(weekStart.getDate() + 6)
        weekEnd.setHours(23, 59, 59, 999)

        const weekLabel = `${String(weekStart.getMonth() + 1).padStart(2, '0')}/${String(weekStart.getDate()).padStart(2, '0')}`

        const weekProducts = allProducts.filter((product) => {
            const productDate = new Date(product.createdAt);
            return productDate >= weekStart && productDate <= weekEnd;
        })

        const weekTotal = weekProducts.reduce((sum, product) => {
            return sum + Number(product.price) * Number(product.quantity);
        }, 0);

        weeklyProductsData.push({
            week: weekLabel,
            total: weekTotal,
            products: weekProducts.length,
        });
    }

    const totalValue = allProducts.reduce(
        (sum, product) => sum + Number(product.price) * Number(product.quantity), 0
    )

    const inStockCount = allProducts.filter((p) => Number(p.quantity) > 5).length;
    const lowStockCount = allProducts.filter((p) => Number(p.quantity) <= 5 && Number(p.quantity) >= 1).length;
    const outOfStockCount = allProducts.filter((p) => Number(p.quantity) === 0).length;

    const inStockPercentage = totalProducts > 0 ? Math.round((inStockCount / totalProducts) * 100) : 0;
    const lowStockPercentage = totalProducts > 0 ? Math.round((lowStockCount / totalProducts) * 100) : 0;
    const outOfStockPercentage = totalProducts > 0 ? Math.round((outOfStockCount / totalProducts) * 100) : 0;

    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Mobile Sidebar */}
            <div className="lg:hidden">
                {/* You might want to add a mobile menu button here */}
            </div>
            
            <Sidebar currentPath='/dashboard' />
            
            {/* Main Content */}
            <main className="lg:ml-72 p-4 lg:p-8">
                {/* Header */}
                <div className="mb-6 lg:mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2 lg:mb-4">
                                Dashboard
                            </h1>
                            <p className="text-base lg:text-xl font-semibold text-gray-500">
                                Welcome back! <span role="img" aria-label="party popper">🎉</span><br />
                                <span className='text-xs lg:text-sm'>Here is an overview of your inventory.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-6 lg:mb-8">
                    <div className="bg-purple-200 rounded-xl border-2 border-purple-400 p-4 lg:p-6">
                        <h2 className="text-base lg:text-lg font-semibold text-gray-700 mb-4 lg:mb-6">
                            Key Metrics
                        </h2>
                        <div className="grid grid-cols-3 gap-4 lg:gap-10">
                            <div className="text-center">
                                <div className="text-xl lg:text-3xl font-bold text-gray-700">{totalProducts}</div>
                                <div className="text-xs lg:text-sm text-gray-600">Total Products</div>
                                <div className='flex items-center justify-center mt-1'>
                                    <span className="text-xs lg:text-sm font-bold text-green-600">+{totalProducts}</span>
                                    <TrendingUp className='w-4 h-4 lg:w-5 lg:h-5 ml-1 text-green-600' />
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-xl lg:text-3xl font-bold text-gray-700">${Number(totalValue).toFixed(0)}</div>
                                <div className="text-xs lg:text-sm text-gray-600">Total Value</div>
                                <div className='flex items-center justify-center mt-1'>
                                    <span className="text-xs lg:text-sm font-bold text-green-600">+${Number(totalValue).toFixed(0)}</span>
                                    <TrendingUp className='w-4 h-4 lg:w-5 lg:h-5 ml-1 text-green-600' />
                                </div>
                            </div>

                            <div className="text-center">
                                <div className="text-xl lg:text-3xl font-bold text-gray-700">{lowStock}</div>
                                <div className="text-xs lg:text-sm text-gray-600">Low Stock</div>
                                <div className='flex items-center justify-center mt-1'>
                                    <span className="text-xs lg:text-sm font-bold text-green-600">+{lowStock}</span>
                                    <TrendingUp className='w-4 h-4 lg:w-5 lg:h-5 ml-1 text-green-600' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inventory Over Time */}
                    <div className="bg-purple-200 rounded-xl border-2 border-purple-400 p-4 lg:p-6">
                        <h2 className='text-base lg:text-lg font-semibold text-gray-700 mb-4'>
                            New Products per week
                        </h2>
                        <div className="w-full h-40 lg:h-48 min-h-0 min-w-0 ml-0">
                            <ProductChart data={weeklyProductsData} />
                        </div>
                    </div>
                </div>

                {/* Stock Overview & Efficiency */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-6 lg:mb-8">
                    {/* Stock Overview */}
                    <div className="bg-purple-200 rounded-xl border-2 border-purple-400 p-4 lg:p-6">
                        <div className="flex items-center justify-center mb-4 lg:mb-6">
                            <h2 className="text-base lg:text-lg font-semibold text-gray-700">
                                Stock Overview
                            </h2>
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            {recent.map((product, key) => {
                                const stockLevel = product.quantity === 0 ? 0 : product.quantity <= (product.lowStockAt || 5)
                                    ? 1 : 2;

                                const bgColor = [
                                    "bg-red-600",
                                    "bg-yellow-400",
                                    "bg-green-600"
                                ];
                                const textColor = [
                                    "text-red-600",
                                    "text-yellow-600",
                                    "text-green-600"
                                ];

                                return (
                                    <div key={key} className="flex items-center justify-between p-2 lg:p-3 rounded-lg shadow-xl border-b-1 border-l-1 border-purple-300 backdrop-blur-lg bg-white/10">
                                        <div className="flex items-center space-x-2 lg:space-x-3">
                                            <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${bgColor[stockLevel]} mr-1 lg:mr-2`} />
                                            <span className='text-xs lg:text-sm font-bold text-gray-700 truncate max-w-[120px] lg:max-w-none'>
                                                {product.name}
                                            </span>
                                        </div>
                                        <div className={`text-xs lg:text-md font-medium ${textColor[stockLevel]}`}>
                                            {product.quantity} units
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Efficiency */}
                    <div className="bg-purple-200 border-2 border-purple-400 rounded-xl p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <h2 className="text-base lg:text-lg font-semibold text-gray-700">Efficiency</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="relative w-32 h-32 lg:w-48 lg:h-48 mb-4 lg:mb-0">
                                <div className="absolute inset-0 rounded-xl"></div>
                                <div className="absolute inset-0 rounded-full border-8 lg:border-12 border-red-800/40"
                                    style={{
                                        clipPath:
                                            "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50% )",
                                    }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className='text-center'>
                                        <div className="text-lg lg:text-2xl font-bold text-gray-900">{inStockPercentage}%</div>
                                        <div className="text-xs lg:text-sm font-medium text-gray-500">In Stock</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2 lg:space-y-3 lg:mt-8">
                                <div className="flex items-center space-x-2 font-bold lg:font-extrabold text-xs lg:text-sm text-gray-600">
                                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-400" />
                                    <span>In Stock ({inStockPercentage}%)</span>
                                </div>

                                <div className="flex items-center space-x-2 font-bold lg:font-extrabold text-xs lg:text-sm text-gray-600">
                                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-400" />
                                    <span>Low Stock ({lowStockPercentage}%)</span>
                                </div>

                                <div className="flex items-center space-x-2 font-bold lg:font-extrabold text-xs lg:text-sm text-gray-600">
                                    <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-400" />
                                    <span>Out of Stock ({outOfStockPercentage}%)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}