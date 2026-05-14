import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { FolderArgsSchema } from "../outputTypeSchemas/FolderArgsSchema"

export const FileIncludeSchema: z.ZodType<Prisma.FileInclude> = z.object({
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
  folder: z.union([z.boolean(),z.lazy(() => FolderArgsSchema)]).optional(),
}).strict()

export default FileIncludeSchema;
