"use client"


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
interface ChartData {
    week: string;
    products: number;
}


export default function ProductChart({data}: {data: ChartData[]}) {

    console.log(data);

    return(
        <div className="lg:h-[200px] h-[170px]  w-full min-w-0 min-h-[170px]">
            <ResponsiveContainer width = "100%" height = {180}>
                <AreaChart 
                    data= {data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    
                >
                    <CartesianGrid strokeDasharray= "3 3" stroke="#ccc"/>
                    <XAxis dataKey="week" stroke='#666' fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke='#666' fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} className='ml-[-40px]' />
                    <Area type="monotone" dataKey="products" stroke="#e51a4c" fill="#ff004f" fillOpacity={0.2} dot={{ fill:"#ff004f", strokeWidth: 2, r: 2}} activeDot={{ fill: "#ff004f", strokeWidth:2, r: 4}} />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor:"#ff9999",
                            border: "1px solid #e66771",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                        labelStyle={{ color: "#ccc", fontWeight:"500" }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}