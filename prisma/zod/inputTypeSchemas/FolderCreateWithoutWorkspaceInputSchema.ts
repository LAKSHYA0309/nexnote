import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateNestedManyWithoutFolderInputSchema } from './FileCreateNestedManyWithoutFolderInputSchema';

export const FolderCreateWithoutWorkspaceInputSchema: z.ZodType<Prisma.FolderCreateWithoutWorkspaceInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  files: z.lazy(() => FileCreateNestedManyWithoutFolderInputSchema).optional()
}).strict();

export default FolderCreateWithoutWorkspaceInputSchema;
