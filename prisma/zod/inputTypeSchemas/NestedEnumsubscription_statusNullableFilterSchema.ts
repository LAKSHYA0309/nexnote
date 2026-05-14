import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { subscription_statusSchema } from './subscription_statusSchema';

export const NestedEnumsubscription_statusNullableFilterSchema: z.ZodType<Prisma.NestedEnumsubscription_statusNullableFilter> = z.object({
  equals: z.lazy(() => subscription_statusSchema).optional().nullable(),
  in: z.lazy(() => subscription_statusSchema).array().optional().nullable(),
  notIn: z.lazy(() => subscription_statusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => subscription_statusSchema),z.lazy(() => NestedEnumsubscription_statusNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumsubscription_statusNullableFilterSchema;
