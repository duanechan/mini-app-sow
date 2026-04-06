import { eq } from "drizzle-orm";
import { db } from "../index.js";
import { users } from "../schema.js";

export async function createUser({
  email,
  firstName,
  lastName,
  passwordHash,
  companyName,
}) {
  const [result] = await db
    .insert(users)
    .values({
      email,
      firstName,
      lastName,
      passwordHash,
      companyName,
    })
    .onConflictDoNothing()
    .returning();
  return result;
}

export async function getUserById(id) {
  const [result] = await db.select().from(users).where(eq(users.id, id));
  return result;
}
