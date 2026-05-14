import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderIncludeSchema } from '../inputTypeSchemas/FolderIncludeSchema'
import { FolderWhereUniqueInputSchema } from '../inputTypeSchemas/FolderWhereUniqueInputSchema'
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { FileFindManyArgsSchema } from "../outputTypeSchemas/FileFindManyArgsSchema"
import { FolderCountOutputTypeArgsSchema } from "../outputTypeSchemas/FolderCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FolderSelectSchema: z.ZodType<Prisma.FolderSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  title: z.boolean().optional(),
  iconId: z.boolean().optional(),
  data: z.boolean().optional(),
  inTrash: z.boolean().optional(),
  bannerUrl: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
  files: z.union([z.boolean(),z.lazy(() => FileFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FolderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const FolderFindUniqueArgsSchema: z.ZodType<Prisma.FolderFindUniqueArgs> = z.object({
  select: FolderSelectSchema.optional(),
  include: z.lazy(() => FolderIncludeSchema).optional(),
  where: FolderWhereUniqueInputSchema,
}).strict() ;

export default FolderFindUniqueArgsSchema;
