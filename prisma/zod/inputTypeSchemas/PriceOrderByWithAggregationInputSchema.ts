import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PriceCountOrderByAggregateInputSchema } from './PriceCountOrderByAggregateInputSchema';
import { PriceAvgOrderByAggregateInputSchema } from './PriceAvgOrderByAggregateInputSchema';
import { PriceMaxOrderByAggregateInputSchema } from './PriceMaxOrderByAggregateInputSchema';
import { PriceMinOrderByAggregateInputSchema } from './PriceMinOrderByAggregateInputSchema';
import { PriceSumOrderByAggregateInputSchema } from './PriceSumOrderByAggregateInputSchema';

export const PriceOrderByWithAggregationInputSchema: z.ZodType<Prisma.PriceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  productId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  active: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  unitAmount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  interval: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  intervalCount: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  trialPeriodDays: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PriceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PriceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PriceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PriceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PriceSumOrderByAggregateInputSchema).optional()
}).strict();

export default PriceOrderByWithAggregationInputSchema;
