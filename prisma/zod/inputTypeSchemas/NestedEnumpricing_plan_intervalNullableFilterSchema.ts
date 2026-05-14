import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';

export const NestedEnumpricing_plan_intervalNullableFilterSchema: z.ZodType<Prisma.NestedEnumpricing_plan_intervalNullableFilter> = z.object({
  equals: z.lazy(() => pricing_plan_intervalSchema).optional().nullable(),
  in: z.lazy(() => pricing_plan_intervalSchema).array().optional().nullable(),
  notIn: z.lazy(() => pricing_plan_intervalSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => pricing_plan_intervalSchema),z.lazy(() => NestedEnumpricing_plan_intervalNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumpricing_plan_intervalNullableFilterSchema;
