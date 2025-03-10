/*
  Warnings:

  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "ROLES" NOT NULL DEFAULT 'USER';

-- DropEnum
DROP TYPE "Role";
