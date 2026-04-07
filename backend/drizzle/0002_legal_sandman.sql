CREATE TYPE "public"."lang" AS ENUM('en', 'sv');--> statement-breakpoint
CREATE TABLE "translations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"lang" "lang" NOT NULL,
	"key" varchar NOT NULL,
	"value" varchar NOT NULL
);
