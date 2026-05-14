import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceArgsSchema } from "../outputTypeSchemas/WorkspaceArgsSchema"
import { FolderArgsSchema } from "../outputTypeSchemas/FolderArgsSchema"

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

export default FileSelectSchema;
