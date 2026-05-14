import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereInputSchema } from './PriceWhereInputSchema';

export const PriceNullableScalarRelationFilterSchema: z.ZodType<Prisma.PriceNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => PriceWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PriceWhereInputSchema).optional().nullable()
}).strict();

export default PriceNullableScalarRelationFilterSchema;
