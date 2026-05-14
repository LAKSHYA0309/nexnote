import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderWhereInputSchema } from './FolderWhereInputSchema';

export const FolderListRelationFilterSchema: z.ZodType<Prisma.FolderListRelationFilter> = z.object({
  every: z.lazy(() => FolderWhereInputSchema).optional(),
  some: z.lazy(() => FolderWhereInputSchema).optional(),
  none: z.lazy(() => FolderWhereInputSchema).optional()
}).strict();

export default FolderListRelationFilterSchema;
