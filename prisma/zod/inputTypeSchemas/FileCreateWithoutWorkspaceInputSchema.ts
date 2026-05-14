import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateNestedOneWithoutFilesInputSchema } from './FolderCreateNestedOneWithoutFilesInputSchema';

export const FileCreateWithoutWorkspaceInputSchema: z.ZodType<Prisma.FileCreateWithoutWorkspaceInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  folder: z.lazy(() => FolderCreateNestedOneWithoutFilesInputSchema)
}).strict();

export default FileCreateWithoutWorkspaceInputSchema;
