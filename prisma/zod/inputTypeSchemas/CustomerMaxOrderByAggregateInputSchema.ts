import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CustomerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  stripeCustomerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CustomerMaxOrderByAggregateInputSchema;
