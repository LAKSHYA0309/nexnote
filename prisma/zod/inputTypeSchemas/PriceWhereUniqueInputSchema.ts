import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereInputSchema } from './PriceWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { BigIntNullableFilterSchema } from './BigIntNullableFilterSchema';
import { Enumpricing_typeNullableFilterSchema } from './Enumpricing_typeNullableFilterSchema';
import { pricing_typeSchema } from './pricing_typeSchema';
import { Enumpricing_plan_intervalNullableFilterSchema } from './Enumpricing_plan_intervalNullableFilterSchema';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { ProductNullableScalarRelationFilterSchema } from './ProductNullableScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { SubscriptionListRelationFilterSchema } from './SubscriptionListRelationFilterSchema';

export const PriceWhereUniqueInputSchema: z.ZodType<Prisma.PriceWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => PriceWhereInputSchema),z.lazy(() => PriceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PriceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PriceWhereInputSchema),z.lazy(() => PriceWhereInputSchema).array() ]).optional(),
  productId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  active: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  unitAmount: z.union([ z.lazy(() => BigIntNullableFilterSchema),z.bigint() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => Enumpricing_typeNullableFilterSchema),z.lazy(() => pricing_typeSchema) ]).optional().nullable(),
  interval: z.union([ z.lazy(() => Enumpricing_plan_intervalNullableFilterSchema),z.lazy(() => pricing_plan_intervalSchema) ]).optional().nullable(),
  intervalCount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  trialPeriodDays: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  product: z.union([ z.lazy(() => ProductNullableScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional().nullable(),
  subscriptions: z.lazy(() => SubscriptionListRelationFilterSchema).optional()
}).strict());

export default PriceWhereUniqueInputSchema;
