"use server";

import { prisma } from "../lib/prisma";
import { getCurrentUser } from "./auth";


export async function deleteProduct(data: FormData) {   

    const user = await getCurrentUser();

    const id = String(data.get("id") || "");
    if (!id) return;

    await prisma.product.deleteMany({ where:  { id: id, userId: user.id }  });
}
