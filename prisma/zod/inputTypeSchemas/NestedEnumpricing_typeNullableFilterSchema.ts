import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_typeSchema } from './pricing_typeSchema';

export const NestedEnumpricing_typeNullableFilterSchema: z.ZodType<Prisma.NestedEnumpricing_typeNullableFilter> = z.object({
  equals: z.lazy(() => pricing_typeSchema).optional().nullable(),
  in: z.lazy(() => pricing_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => pricing_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => pricing_typeSchema),z.lazy(() => NestedEnumpricing_typeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumpricing_typeNullableFilterSchema;
