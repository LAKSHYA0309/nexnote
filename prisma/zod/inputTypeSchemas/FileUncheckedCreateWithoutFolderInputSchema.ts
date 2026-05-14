import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const FileUncheckedCreateWithoutFolderInputSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutFolderInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  workspaceId: z.string()
}).strict();

export default FileUncheckedCreateWithoutFolderInputSchema;
