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
