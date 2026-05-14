import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedOneWithoutFoldersInputSchema } from './WorkspaceCreateNestedOneWithoutFoldersInputSchema';

export const FolderCreateWithoutFilesInputSchema: z.ZodType<Prisma.FolderCreateWithoutFilesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutFoldersInputSchema)
}).strict();

export default FolderCreateWithoutFilesInputSchema;
