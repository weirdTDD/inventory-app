"use client"


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
interface ChartData {
    week: string;
    products: number;
}


export default function ProductChart({data}: {data: ChartData[]}) {

    console.log(data);

    return(
        <div className="h-48 w-full">
            <ResponsiveContainer width = "100%" height = "100%">
                <AreaChart 
                    data= {data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    
                >
                    <CartesianGrid strokeDasharray= "3 3" stroke="#ccc"/>
                    <XAxis dataKey="week" stroke='#666' fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke='#666' fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
                    <Area type="monotone" dataKey="products" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}