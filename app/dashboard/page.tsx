import React from 'react'
import Sidebar from '../../components/sidebar'
import { prisma } from '../../lib/prisma'
import { getCurrentUser } from '../../lib/auth'
import { TrendingUp } from 'lucide-react'
import ProductChart from '../../components/products-chart'


export default  async function DashboardPage ()  {

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
        take:6,
    }); 
    
    console.log(recent);

    const allProducts = await prisma.product.findMany({
        where: { userId },
        select: { price:true, quantity:true, createdAt:true },
    });

   const totalValue = allProducts.reduce(
         (sum, product) => sum + Number(product.price) * Number(product.quantity), 0 
    );
    
    const now = new Date();
    const weeklyProductsData = []

    for (let i = 11; i>=0; i--) {
        const weekStart = new Date(now)
        weekStart.setDate(weekStart.getDate() - i * 7)
        weekStart.setHours(0, 0, 0, 0)

        const weekEnd = new Date(weekStart)
        weekEnd.setDate(weekStart.getDate() + 6)
        weekEnd.setHours(23 , 59, 59, 999)

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
  

  return (
    <div className='min-h-screen bg-gray-100'>
        
       <Sidebar currentPath='/dashboard' />
       <main className="ml-72 p-8" >
        {/* Header */}
        <div className="mb-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-700 mb-4">
                        Dashboard
                    </h1>
                    <p className="text-xl font-semibold text-gray-500">
                        Welcome back! <span role="img" aria-label="party popper">🎉</span><br />
                        <span className='text-sm'>Here is an overview of your inventory.</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Key Metrics*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-200 rounded-l-xl  border-2 border-purple-400 px-6 py-2 mb-4  ">
                <h2 className="text-lg font-semibold text-gray-700 mb-6 ">
                    Key Metrics
                </h2>
                <div className="grid grid-cols-3 gap-10">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-700">{totalProducts}</div>
                        <div className="text-sm text-gray-600">Total Products</div>
                        <div className='flex items-center justify-center mt-1'>
                            <span className="text-sm font-bold text-green-600">+{totalProducts}</span>
                            <TrendingUp className='w-5 h-5 ml-1 text-green-600' />
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-700">$ {Number(totalValue).toFixed(0)}</div>
                        <div className="text-sm text-gray-600">Total Value</div>
                        <div className='flex items-center justify-center mt-1'>
                            <span className="text-sm font-bold text-green-600">+$ {Number(totalValue).toFixed(0)}</span>
                            <TrendingUp className='w-5 h-5 ml-1 text-green-600' />
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl font-bold text-gray-700">{lowStock}</div>
                        <div className="text-sm text-gray-600">Low Stock</div>
                        <div className='flex items-center justify-center mt-1'>
                            <span className="text-sm font-bold text-green-600">+{lowStock}</span>
                            <TrendingUp className='w-5 h-5 ml-1 text-green-600' />
                        </div>
                    </div>
                </div>



            </div>

            
            {/*Inventory Over Time*/}
            <div className="bg-purple-200 rounded-r-xl border-2 border-purple-400 p-6 mb-4">
                <h2 className='text-xl mb-6'>
                    New Products per week
                </h2>
                <div className="w-full h-48 min-h-0 min-w-0">
                    <ProductChart data={weeklyProductsData}  />
                </div>
            </div>




        </div>

         {/* Stock Overview*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-200 rounded-l-xl border-2 border-purple-400 px-6 py-4 ">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-700">
                     Stock Overview
                    </h2>
                </div>
                <div className="space-y-3">
                    {recent.map((product, key) => {
                        const stockLevel = product.quantity === 0 ? 0 :product.quantity<= (product.lowStockAt ||5) 
                        ? 1 : 2;

                        const bgColor = [
                            "bg-red-600",
                            "bg-yellow-400",
                            "bg-green-600"
                        ];
                        const textColor =[
                            "text-red-600",
                            "text-yellow-600",
                            "text-green-600"
                        ];

                        return(
                            <div key={key} className="flex items-center justify-between gap-10 p-3 rounded-lg shadow-xl border-b-1 border-l-1 border-purple-300 bg-purple-200">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-3 h-3 rounded-full ${bgColor[stockLevel]} mr-2`}/>
                                    <span className='text-sm font-bold text-gray-700'>{product.name}</span>
                                </div>
                                <div className={`text-md font-medium ${textColor[stockLevel]}`}>{product.quantity} units</div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
        
        
       </main>
        
    </div>
  )
}
