-- CreateEnum
CREATE TYPE "public"."key_status" AS ENUM ('expired', 'invalid', 'valid', 'default');

-- CreateEnum
CREATE TYPE "public"."key_type" AS ENUM ('stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf');

-- CreateEnum
CREATE TYPE "public"."factor_status" AS ENUM ('verified', 'unverified');

-- CreateEnum
CREATE TYPE "public"."factor_type" AS ENUM ('webauthn', 'totp');

-- CreateEnum
CREATE TYPE "public"."aal_level" AS ENUM ('aal3', 'aal2', 'aal1');

-- CreateEnum
CREATE TYPE "public"."code_challenge_method" AS ENUM ('plain', 's256');

-- CreateEnum
CREATE TYPE "public"."pricing_type" AS ENUM ('recurring', 'one_time');

-- CreateEnum
CREATE TYPE "public"."pricing_plan_interval" AS ENUM ('year', 'month', 'week', 'day');

-- CreateEnum
CREATE TYPE "public"."subscription_status" AS ENUM ('unpaid', 'past_due', 'incomplete_expired', 'incomplete', 'canceled', 'active', 'trialing');

-- CreateEnum
CREATE TYPE "public"."equality_op" AS ENUM ('in', 'gte', 'gt', 'lte', 'lt', 'neq', 'eq');

-- CreateEnum
CREATE TYPE "public"."action" AS ENUM ('ERROR', 'TRUNCATE', 'DELETE', 'UPDATE', 'INSERT');

-- CreateTable
CREATE TABLE "public"."Workspace" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workspaceOwner" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "iconId" TEXT NOT NULL,
    "data" TEXT,
    "inTrash" TEXT,
    "logo" TEXT,
    "bannerUrl" TEXT,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Folder" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "iconId" TEXT NOT NULL,
    "data" TEXT,
    "inTrash" TEXT,
    "bannerUrl" TEXT,
    "workspaceId" TEXT NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."File" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "iconId" TEXT NOT NULL,
    "data" TEXT,
    "inTrash" TEXT,
    "bannerUrl" TEXT,
    "workspaceId" TEXT NOT NULL,
    "folderId" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT,
    "avatarUrl" TEXT,
    "billingAddress" JSONB,
    "updatedAt" TIMESTAMP(3),
    "paymentMethod" JSONB,
    "email" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Customer" (
    "id" TEXT NOT NULL,
    "stripeCustomerId" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" TEXT NOT NULL,
    "active" BOOLEAN,
    "name" TEXT,
    "description" TEXT,
    "image" TEXT,
    "metadata" JSONB,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Price" (
    "id" TEXT NOT NULL,
    "productId" TEXT,
    "active" BOOLEAN,
    "description" TEXT,
    "unitAmount" BIGINT,
    "currency" TEXT,
    "type" "public"."pricing_type",
    "interval" "public"."pricing_plan_interval",
    "intervalCount" INTEGER,
    "trialPeriodDays" INTEGER,
    "metadata" JSONB,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" "public"."subscription_status",
    "metadata" JSONB,
    "priceId" TEXT,
    "quantity" INTEGER,
    "cancelAtPeriodEnd" BOOLEAN,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentPeriodStart" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentPeriodEnd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "cancelAt" TIMESTAMP(3),
    "canceledAt" TIMESTAMP(3),
    "trialStart" TIMESTAMP(3),
    "trialEnd" TIMESTAMP(3),

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Collaborator" (
    "id" TEXT NOT NULL,
    "workspaceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Folder" ADD CONSTRAINT "Folder_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "public"."Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."File" ADD CONSTRAINT "File_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "public"."Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."File" ADD CONSTRAINT "File_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "public"."Folder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Price" ADD CONSTRAINT "Price_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "public"."Price"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Collaborator" ADD CONSTRAINT "Collaborator_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "public"."Workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Collaborator" ADD CONSTRAINT "Collaborator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
