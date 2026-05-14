import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { BigIntNullableWithAggregatesFilterSchema } from './BigIntNullableWithAggregatesFilterSchema';
import { Enumpricing_typeNullableWithAggregatesFilterSchema } from './Enumpricing_typeNullableWithAggregatesFilterSchema';
import { pricing_typeSchema } from './pricing_typeSchema';
import { Enumpricing_plan_intervalNullableWithAggregatesFilterSchema } from './Enumpricing_plan_intervalNullableWithAggregatesFilterSchema';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';

export const PriceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PriceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PriceScalarWhereWithAggregatesInputSchema),z.lazy(() => PriceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PriceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PriceScalarWhereWithAggregatesInputSchema),z.lazy(() => PriceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  active: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  unitAmount: z.union([ z.lazy(() => BigIntNullableWithAggregatesFilterSchema),z.bigint() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => Enumpricing_typeNullableWithAggregatesFilterSchema),z.lazy(() => pricing_typeSchema) ]).optional().nullable(),
  interval: z.union([ z.lazy(() => Enumpricing_plan_intervalNullableWithAggregatesFilterSchema),z.lazy(() => pricing_plan_intervalSchema) ]).optional().nullable(),
  intervalCount: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  trialPeriodDays: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional()
}).strict();

export default PriceScalarWhereWithAggregatesInputSchema;
