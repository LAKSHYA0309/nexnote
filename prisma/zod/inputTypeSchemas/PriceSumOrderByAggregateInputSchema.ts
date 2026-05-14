import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PriceSumOrderByAggregateInputSchema: z.ZodType<Prisma.PriceSumOrderByAggregateInput> = z.object({
  unitAmount: z.lazy(() => SortOrderSchema).optional(),
  intervalCount: z.lazy(() => SortOrderSchema).optional(),
  trialPeriodDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PriceSumOrderByAggregateInputSchema;
