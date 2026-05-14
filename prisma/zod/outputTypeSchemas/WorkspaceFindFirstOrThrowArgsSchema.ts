import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceIncludeSchema } from '../inputTypeSchemas/WorkspaceIncludeSchema'
import { WorkspaceWhereInputSchema } from '../inputTypeSchemas/WorkspaceWhereInputSchema'
import { WorkspaceOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkspaceOrderByWithRelationInputSchema'
import { WorkspaceWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceWhereUniqueInputSchema'
import { WorkspaceScalarFieldEnumSchema } from '../inputTypeSchemas/WorkspaceScalarFieldEnumSchema'
import { FolderFindManyArgsSchema } from "../outputTypeSchemas/FolderFindManyArgsSchema"
import { FileFindManyArgsSchema } from "../outputTypeSchemas/FileFindManyArgsSchema"
import { CollaboratorFindManyArgsSchema } from "../outputTypeSchemas/CollaboratorFindManyArgsSchema"
import { WorkspaceCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkspaceCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkspaceSelectSchema: z.ZodType<Prisma.WorkspaceSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  workspaceOwner: z.boolean().optional(),
  title: z.boolean().optional(),
  iconId: z.boolean().optional(),
  data: z.boolean().optional(),
  inTrash: z.boolean().optional(),
  logo: z.boolean().optional(),
  bannerUrl: z.boolean().optional(),
  folders: z.union([z.boolean(),z.lazy(() => FolderFindManyArgsSchema)]).optional(),
  files: z.union([z.boolean(),z.lazy(() => FileFindManyArgsSchema)]).optional(),
  collaborators: z.union([z.boolean(),z.lazy(() => CollaboratorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkspaceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const WorkspaceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WorkspaceFindFirstOrThrowArgs> = z.object({
  select: WorkspaceSelectSchema.optional(),
  include: z.lazy(() => WorkspaceIncludeSchema).optional(),
  where: WorkspaceWhereInputSchema.optional(),
  orderBy: z.union([ WorkspaceOrderByWithRelationInputSchema.array(),WorkspaceOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkspaceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WorkspaceScalarFieldEnumSchema,WorkspaceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WorkspaceFindFirstOrThrowArgsSchema;
