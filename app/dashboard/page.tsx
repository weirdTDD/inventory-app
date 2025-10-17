import React from 'react'
import Sidebar from '../../components/sidebar'
import { prisma } from '../../lib/prisma'
import { getCurrentUser } from '../../lib/auth'
import { TrendingUp } from 'lucide-react'


export default  async function DashboardPage ()  {

    const user = await getCurrentUser();
    const userId = user.id

    const totalProducts = await prisma.product.count({ where: { userId } });

    const lowStock = await prisma.product.count({
        where: {
            userId: user.id,

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
        div
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
                <div className="text-3xl font-bold text-gray-700">{totalProducts}</div>
                <div className="text-sm text-gray-600">Total Products</div>
                <div className='flex items-center justify-center mt-1'>
                    <span className="text-xs text-green-600">+{totalProducts}</span>
                    <TrendingUp className='w-3 h-3 ml-1 text-green-600' />
                </div>
            </div>
        </div>
       </main>
        
    </div>
  )
}