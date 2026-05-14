import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorIncludeSchema } from '../inputTypeSchemas/CollaboratorIncludeSchema'
import { CollaboratorWhereUniqueInputSchema } from '../inputTypeSchemas/CollaboratorWhereUniqueInputSchema'
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CollaboratorSelectSchema: z.ZodType<Prisma.CollaboratorSelect> = z.object({
  id: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const CollaboratorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CollaboratorFindUniqueOrThrowArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: z.lazy(() => CollaboratorIncludeSchema).optional(),
  where: CollaboratorWhereUniqueInputSchema,
}).strict() ;

export default CollaboratorFindUniqueOrThrowArgsSchema;
