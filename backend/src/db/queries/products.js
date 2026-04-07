import { eq } from "drizzle-orm";
import { db } from "../index.js";
import { products } from "../schema.js";

export async function createProduct({
  userId,
  articleNo,
  productName,
  inPrice,
  price,
  unit,
  inStock,
  description,
}) {
  const [result] = await db
    .insert(products)
    .values({
      userId,
      articleNo,
      productName,
      inPrice,
      price,
      unit,
      inStock,
      description,
    })
    .onConflictDoNothing()
    .returning();
  return result;
}

export async function getProductsByUserId(userId) {
  const result = await db
    .select()
    .from(products)
    .where(eq(products.userId, userId));
  return result;
}
