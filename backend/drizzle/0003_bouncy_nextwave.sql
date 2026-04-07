ALTER TABLE "products" ALTER COLUMN "unit" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "unit" SET DEFAULT 'pcs'::text;--> statement-breakpoint
DROP TYPE "public"."unit";--> statement-breakpoint
CREATE TYPE "public"."unit" AS ENUM('kilometers/hour', 'kilograms', 'meters', 'grams', 'pcs');--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "unit" SET DEFAULT 'pcs'::"public"."unit";--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "unit" SET DATA TYPE "public"."unit" USING "unit"::"public"."unit";