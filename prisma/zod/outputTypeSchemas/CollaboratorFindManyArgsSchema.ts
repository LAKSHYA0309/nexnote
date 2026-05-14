import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorIncludeSchema } from '../inputTypeSchemas/CollaboratorIncludeSchema'
import { CollaboratorWhereInputSchema } from '../inputTypeSchemas/CollaboratorWhereInputSchema'
import { CollaboratorOrderByWithRelationInputSchema } from '../inputTypeSchemas/CollaboratorOrderByWithRelationInputSchema'
import { CollaboratorWhereUniqueInputSchema } from '../inputTypeSchemas/CollaboratorWhereUniqueInputSchema'
import { CollaboratorScalarFieldEnumSchema } from '../inputTypeSchemas/CollaboratorScalarFieldEnumSchema'
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

export const CollaboratorFindManyArgsSchema: z.ZodType<Prisma.CollaboratorFindManyArgs> = z.object({
  select: CollaboratorSelectSchema.optional(),
  include: z.lazy(() => CollaboratorIncludeSchema).optional(),
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithRelationInputSchema.array(),CollaboratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CollaboratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CollaboratorScalarFieldEnumSchema,CollaboratorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CollaboratorFindManyArgsSchema;
