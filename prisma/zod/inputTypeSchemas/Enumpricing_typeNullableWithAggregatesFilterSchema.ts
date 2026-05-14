import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_typeSchema } from './pricing_typeSchema';
import { NestedEnumpricing_typeNullableWithAggregatesFilterSchema } from './NestedEnumpricing_typeNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumpricing_typeNullableFilterSchema } from './NestedEnumpricing_typeNullableFilterSchema';

export const Enumpricing_typeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.Enumpricing_typeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => pricing_typeSchema).optional().nullable(),
  in: z.lazy(() => pricing_typeSchema).array().optional().nullable(),
  notIn: z.lazy(() => pricing_typeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => pricing_typeSchema),z.lazy(() => NestedEnumpricing_typeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumpricing_typeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumpricing_typeNullableFilterSchema).optional()
}).strict();

export default Enumpricing_typeNullableWithAggregatesFilterSchema;
