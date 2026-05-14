import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { FileFindManyArgsSchema } from "../outputTypeSchemas/FileFindManyArgsSchema"
import { FolderCountOutputTypeArgsSchema } from "../outputTypeSchemas/FolderCountOutputTypeArgsSchema"

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

export default FolderSelectSchema;
