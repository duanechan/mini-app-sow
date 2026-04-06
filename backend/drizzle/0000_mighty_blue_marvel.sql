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
