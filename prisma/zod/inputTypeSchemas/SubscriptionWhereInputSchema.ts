import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { Enumsubscription_statusNullableFilterSchema } from './Enumsubscription_statusNullableFilterSchema';
import { subscription_statusSchema } from './subscription_statusSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { PriceNullableScalarRelationFilterSchema } from './PriceNullableScalarRelationFilterSchema';
import { PriceWhereInputSchema } from './PriceWhereInputSchema';

export const SubscriptionWhereInputSchema: z.ZodType<Prisma.SubscriptionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubscriptionWhereInputSchema),z.lazy(() => SubscriptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubscriptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubscriptionWhereInputSchema),z.lazy(() => SubscriptionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => Enumsubscription_statusNullableFilterSchema),z.lazy(() => subscription_statusSchema) ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  priceId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  cancelAtPeriodEnd: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  created: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  currentPeriodStart: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  currentPeriodEnd: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  cancelAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  canceledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  trialStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  trialEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  price: z.union([ z.lazy(() => PriceNullableScalarRelationFilterSchema),z.lazy(() => PriceWhereInputSchema) ]).optional().nullable(),
}).strict();

export default SubscriptionWhereInputSchema;
