import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceIncludeSchema } from '../inputTypeSchemas/WorkspaceIncludeSchema'
import { WorkspaceWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceWhereUniqueInputSchema'
import { WorkspaceCreateInputSchema } from '../inputTypeSchemas/WorkspaceCreateInputSchema'
import { WorkspaceUncheckedCreateInputSchema } from '../inputTypeSchemas/WorkspaceUncheckedCreateInputSchema'
import { WorkspaceUpdateInputSchema } from '../inputTypeSchemas/WorkspaceUpdateInputSchema'
import { WorkspaceUncheckedUpdateInputSchema } from '../inputTypeSchemas/WorkspaceUncheckedUpdateInputSchema'
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

export const WorkspaceUpsertArgsSchema: z.ZodType<Prisma.WorkspaceUpsertArgs> = z.object({
  select: WorkspaceSelectSchema.optional(),
  include: z.lazy(() => WorkspaceIncludeSchema).optional(),
  where: WorkspaceWhereUniqueInputSchema,
  create: z.union([ WorkspaceCreateInputSchema,WorkspaceUncheckedCreateInputSchema ]),
  update: z.union([ WorkspaceUpdateInputSchema,WorkspaceUncheckedUpdateInputSchema ]),
}).strict() ;

export default WorkspaceUpsertArgsSchema;
