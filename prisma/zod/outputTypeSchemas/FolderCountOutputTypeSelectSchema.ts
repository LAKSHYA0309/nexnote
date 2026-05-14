import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const FolderCountOutputTypeSelectSchema: z.ZodType<Prisma.FolderCountOutputTypeSelect> = z.object({
  files: z.boolean().optional(),
}).strict();

export default FolderCountOutputTypeSelectSchema;
