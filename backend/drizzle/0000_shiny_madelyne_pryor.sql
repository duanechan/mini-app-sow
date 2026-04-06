CREATE TYPE "public"."unit" AS ENUM('kilometers/hour', 'kilograms', 'meters', 'grams', 'N/A');--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"article_number" integer NOT NULL,
	"product_name" varchar(50) NOT NULL,
	"in_price" integer DEFAULT 0 NOT NULL,
	"price" integer DEFAULT 0 NOT NULL,
	"unit" "unit" DEFAULT 'N/A' NOT NULL,
	"in_stock" integer DEFAULT 0 NOT NULL,
	"description" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"email" varchar(255) NOT NULL,
	"first_name" varchar(200) NOT NULL,
	"last_name" varchar(200) NOT NULL,
	"password_hash" varchar NOT NULL,
	"company_name" varchar(200),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
