import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { subscription_statusSchema } from './subscription_statusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const SubscriptionUncheckedCreateWithoutPriceInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutPriceInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
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
  trialEnd: z.coerce.date().optional().nullable()
}).strict();

export default SubscriptionUncheckedCreateWithoutPriceInputSchema;
