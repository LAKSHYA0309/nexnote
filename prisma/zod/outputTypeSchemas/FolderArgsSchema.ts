import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderSelectSchema } from '../inputTypeSchemas/FolderSelectSchema';
import { FolderIncludeSchema } from '../inputTypeSchemas/FolderIncludeSchema';

export const FolderArgsSchema: z.ZodType<Prisma.FolderDefaultArgs> = z.object({
  select: z.lazy(() => FolderSelectSchema).optional(),
  include: z.lazy(() => FolderIncludeSchema).optional(),
}).strict();

export default FolderArgsSchema;
