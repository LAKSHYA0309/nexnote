import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereInputSchema } from './PriceWhereInputSchema';

export const PriceListRelationFilterSchema: z.ZodType<Prisma.PriceListRelationFilter> = z.object({
  every: z.lazy(() => PriceWhereInputSchema).optional(),
  some: z.lazy(() => PriceWhereInputSchema).optional(),
  none: z.lazy(() => PriceWhereInputSchema).optional()
}).strict();

export default PriceListRelationFilterSchema;
