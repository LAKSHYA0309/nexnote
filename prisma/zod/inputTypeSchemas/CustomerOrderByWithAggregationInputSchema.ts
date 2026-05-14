import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CustomerCountOrderByAggregateInputSchema } from './CustomerCountOrderByAggregateInputSchema';
import { CustomerMaxOrderByAggregateInputSchema } from './CustomerMaxOrderByAggregateInputSchema';
import { CustomerMinOrderByAggregateInputSchema } from './CustomerMinOrderByAggregateInputSchema';

export const CustomerOrderByWithAggregationInputSchema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  stripeCustomerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CustomerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CustomerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CustomerMinOrderByAggregateInputSchema).optional()
}).strict();

export default CustomerOrderByWithAggregationInputSchema;
