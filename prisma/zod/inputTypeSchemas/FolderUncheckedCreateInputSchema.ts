import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileUncheckedCreateNestedManyWithoutFolderInputSchema } from './FileUncheckedCreateNestedManyWithoutFolderInputSchema';

export const FolderUncheckedCreateInputSchema: z.ZodType<Prisma.FolderUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  workspaceId: z.string(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutFolderInputSchema).optional()
}).strict();

export default FolderUncheckedCreateInputSchema;
