import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedOneWithoutFilesInputSchema } from './WorkspaceCreateNestedOneWithoutFilesInputSchema';

export const FileCreateWithoutFolderInputSchema: z.ZodType<Prisma.FileCreateWithoutFolderInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutFilesInputSchema)
}).strict();

export default FileCreateWithoutFolderInputSchema;
