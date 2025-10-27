"use server";

import { prisma } from "../lib/prisma";
import { getCurrentUser } from "./auth";
import { z } from "zod";
import { redirect } from "next/navigation";


const ProductSchema = z.object({
    name: z.string().min(1, "Name is required"),
    quantity:z.coerce.number().int().min(0, "Quantity must be provided"),
    price: z.coerce.number().nonnegative("Price must be non-negative"),
    sku: z.string().optional(),
    lowStockAt: z.coerce.number().int().min(0).optional(),
})

export async function deleteProduct(data: FormData) {

    const user = await getCurrentUser();

    const id = String(data.get("id") || "");
    if (!id) return;

    try {
        await prisma.product.delete({
            where: { id: id, userId: user.id }
        });
        redirect("/inventory");
    } catch (error) {
        console.error("Delete error:", error);
        // Optionally, redirect with error or handle differently
    }
}


export async function createProduct(data: FormData) {   

    const user = await getCurrentUser();
    const parsed = ProductSchema.safeParse({
        name: data.get("name"),
        price: data.get("price"),
        quantity: data.get("quantity"),
        sku: data.get("sku") || undefined,
        lowStockAt: data.get("lowStockAt") || undefined,
    });  

    if (!parsed.success) {
    console.error(parsed.error.flatten());
    return { success: false, error: "Validation failed" };
  }

  try {
    await prisma.product.create({
      data: { ...parsed.data, userId: user.id },
    });

    return {success: true};
  } catch (error) {
    console.error("DB error:", error);
    return { success: false, error: "Failed to create product" };
  }

}
