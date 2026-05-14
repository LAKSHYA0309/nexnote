/*
  Warnings:

  - A unique constraint covering the columns `[userId,workspaceId]` on the table `Collaborator` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_userId_workspaceId_key" ON "public"."Collaborator"("userId", "workspaceId");
