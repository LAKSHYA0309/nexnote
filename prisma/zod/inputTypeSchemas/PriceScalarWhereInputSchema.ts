import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { BigIntNullableFilterSchema } from './BigIntNullableFilterSchema';
import { Enumpricing_typeNullableFilterSchema } from './Enumpricing_typeNullableFilterSchema';
import { pricing_typeSchema } from './pricing_typeSchema';
import { Enumpricing_plan_intervalNullableFilterSchema } from './Enumpricing_plan_intervalNullableFilterSchema';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';

export const PriceScalarWhereInputSchema: z.ZodType<Prisma.PriceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PriceScalarWhereInputSchema),z.lazy(() => PriceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PriceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PriceScalarWhereInputSchema),z.lazy(() => PriceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  active: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unitAmount: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => Enumpricing_typeNullableFilterSchema),z.lazy(() => pricing_typeSchema) ]).optional().nullable(),
  interval: z.union([ z.lazy(() => Enumpricing_plan_intervalNullableFilterSchema),z.lazy(() => pricing_plan_intervalSchema) ]).optional().nullable(),
  intervalCount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  trialPeriodDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional()
}).strict();

export default PriceScalarWhereInputSchema;
