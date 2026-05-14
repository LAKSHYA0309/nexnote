import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileIncludeSchema } from '../inputTypeSchemas/FileIncludeSchema'
import { FileWhereUniqueInputSchema } from '../inputTypeSchemas/FileWhereUniqueInputSchema'
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { FolderArgsSchema } from "../outputTypeSchemas/FolderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FileSelectSchema: z.ZodType<Prisma.FileSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  title: z.boolean().optional(),
  iconId: z.boolean().optional(),
  data: z.boolean().optional(),
  inTrash: z.boolean().optional(),
  bannerUrl: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  folderId: z.boolean().optional(),
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
  folder: z.union([z.boolean(),z.lazy(() => FolderArgsSchema)]).optional(),
}).strict()

export const FileFindUniqueArgsSchema: z.ZodType<Prisma.FileFindUniqueArgs> = z.object({
  select: FileSelectSchema.optional(),
  include: z.lazy(() => FileIncludeSchema).optional(),
  where: FileWhereUniqueInputSchema,
}).strict() ;

export default FileFindUniqueArgsSchema;
