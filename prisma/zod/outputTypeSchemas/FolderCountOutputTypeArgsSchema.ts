import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderCountOutputTypeSelectSchema } from './FolderCountOutputTypeSelectSchema';

export const FolderCountOutputTypeArgsSchema: z.ZodType<Prisma.FolderCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => FolderCountOutputTypeSelectSchema).nullish(),
}).strict();

export default FolderCountOutputTypeSelectSchema;
