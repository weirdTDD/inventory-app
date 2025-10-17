import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main()  {
    const demoUserId = "3541656d-991a-4de9-afbe-6768bf22500d"

    //Create sample products
    await prisma.product.createMany({
        data: Array.from({ length:25 }).map((_, i) =>({
            userId:demoUserId,
            name: `Product ${i + 1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random()*20),
            lowStockAt: 6,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 *(i * 5)),
        }))
    });

    console.log("Seed data created successfully!");
    console.log(`Created 25 product for user ID: ${demoUserId}`);
}

main()
    .catch((e) =>{
        console.error(e);
        process.exit(1);
    })
    .finally(async () =>{
        await prisma.$disconnect();
    });
