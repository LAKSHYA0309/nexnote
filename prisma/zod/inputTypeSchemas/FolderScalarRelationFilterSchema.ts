import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderWhereInputSchema } from './FolderWhereInputSchema';

export const FolderScalarRelationFilterSchema: z.ZodType<Prisma.FolderScalarRelationFilter> = z.object({
  is: z.lazy(() => FolderWhereInputSchema).optional(),
  isNot: z.lazy(() => FolderWhereInputSchema).optional()
}).strict();

export default FolderScalarRelationFilterSchema;
