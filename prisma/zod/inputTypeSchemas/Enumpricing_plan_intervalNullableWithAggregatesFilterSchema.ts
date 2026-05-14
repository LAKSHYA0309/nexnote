import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';
import { NestedEnumpricing_plan_intervalNullableWithAggregatesFilterSchema } from './NestedEnumpricing_plan_intervalNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumpricing_plan_intervalNullableFilterSchema } from './NestedEnumpricing_plan_intervalNullableFilterSchema';

export const Enumpricing_plan_intervalNullableWithAggregatesFilterSchema: z.ZodType<Prisma.Enumpricing_plan_intervalNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => pricing_plan_intervalSchema).optional().nullable(),
  in: z.lazy(() => pricing_plan_intervalSchema).array().optional().nullable(),
  notIn: z.lazy(() => pricing_plan_intervalSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => pricing_plan_intervalSchema),z.lazy(() => NestedEnumpricing_plan_intervalNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumpricing_plan_intervalNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumpricing_plan_intervalNullableFilterSchema).optional()
}).strict();

export default Enumpricing_plan_intervalNullableWithAggregatesFilterSchema;
