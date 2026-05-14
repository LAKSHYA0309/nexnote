import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const FolderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.FolderOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default FolderOrderByRelationAggregateInputSchema;
