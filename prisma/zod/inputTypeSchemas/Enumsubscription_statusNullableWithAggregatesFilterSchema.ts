import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { subscription_statusSchema } from './subscription_statusSchema';
import { NestedEnumsubscription_statusNullableWithAggregatesFilterSchema } from './NestedEnumsubscription_statusNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumsubscription_statusNullableFilterSchema } from './NestedEnumsubscription_statusNullableFilterSchema';

export const Enumsubscription_statusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.Enumsubscription_statusNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => subscription_statusSchema).optional().nullable(),
  in: z.lazy(() => subscription_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => subscription_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => subscription_statusSchema),z.lazy(() => NestedEnumsubscription_statusNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumsubscription_statusNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumsubscription_statusNullableFilterSchema).optional()
}).strict();

export default Enumsubscription_statusNullableWithAggregatesFilterSchema;
