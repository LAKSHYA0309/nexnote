import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { subscription_statusSchema } from './subscription_statusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { UserCreateNestedOneWithoutSubscriptionsInputSchema } from './UserCreateNestedOneWithoutSubscriptionsInputSchema';
import { PriceCreateNestedOneWithoutSubscriptionsInputSchema } from './PriceCreateNestedOneWithoutSubscriptionsInputSchema';

export const SubscriptionCreateInputSchema: z.ZodType<Prisma.SubscriptionCreateInput> = z.object({
  id: z.string().uuid().optional(),
  status: z.lazy(() => subscription_statusSchema).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  quantity: z.number().int().optional().nullable(),
  cancelAtPeriodEnd: z.boolean().optional().nullable(),
  created: z.coerce.date().optional(),
  currentPeriodStart: z.coerce.date().optional(),
  currentPeriodEnd: z.coerce.date().optional(),
  endedAt: z.coerce.date().optional().nullable(),
  cancelAt: z.coerce.date().optional().nullable(),
  canceledAt: z.coerce.date().optional().nullable(),
  trialStart: z.coerce.date().optional().nullable(),
  trialEnd: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutSubscriptionsInputSchema),
  price: z.lazy(() => PriceCreateNestedOneWithoutSubscriptionsInputSchema).optional()
}).strict();

export default SubscriptionCreateInputSchema;
