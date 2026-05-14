import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SubscriptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubscriptionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SubscriptionOrderByRelationAggregateInputSchema;
