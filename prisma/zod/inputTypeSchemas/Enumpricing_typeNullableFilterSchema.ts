import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_typeSchema } from './pricing_typeSchema';
import { NestedEnumpricing_typeNullableFilterSchema } from './NestedEnumpricing_typeNullableFilterSchema';

export const Enumpricing_typeNullableFilterSchema: z.ZodType<Prisma.Enumpricing_typeNullableFilter> = z.object({
  equals: z.lazy(() => pricing_typeSchema).optional().nullable(),
  in: z.lazy(() => pricing_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => pricing_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => pricing_typeSchema),z.lazy(() => NestedEnumpricing_typeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default Enumpricing_typeNullableFilterSchema;
