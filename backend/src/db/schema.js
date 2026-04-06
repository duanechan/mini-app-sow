import {
  integer,
  pgEnum,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  email: varchar("email", { length: 255 }).unique().notNull(),
  firstName: varchar("first_name", { length: 200 }).notNull(),
  lastName: varchar("last_name", { length: 200 }).notNull(),
  passwordHash: varchar("password_hash").notNull(),
  companyName: varchar("company_name", { length: 200 }),
});

export const unitEnum = pgEnum("unit", [
  "kilometers/hour",
  "kilograms",
  "meters",
  "grams",
  "N/A",
]);

export const products = pgTable("products", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  articleNo: integer("article_number").notNull(),
  productName: varchar("product_name", { length: 50 }).notNull(),
  inPrice: integer("in_price").notNull().default(0),
  price: integer("price").notNull().default(0),
  unit: unitEnum("unit").notNull().default("N/A"),
  inStock: integer("in_stock").notNull().default(0),
  description: varchar("description", { length: 50 }),
});
