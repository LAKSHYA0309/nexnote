import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { FileFindManyArgsSchema } from "../outputTypeSchemas/FileFindManyArgsSchema"
import { FolderCountOutputTypeArgsSchema } from "../outputTypeSchemas/FolderCountOutputTypeArgsSchema"

export const FolderIncludeSchema: z.ZodType<Prisma.FolderInclude> = z.object({
  workspace: z.union([z.boolean(),z.lazy(() => WorkspaceArgsSchema)]).optional(),
  files: z.union([z.boolean(),z.lazy(() => FileFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => FolderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default FolderIncludeSchema;
