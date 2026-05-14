import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_typeSchema } from './pricing_typeSchema';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const PriceUncheckedCreateWithoutSubscriptionsInputSchema: z.ZodType<Prisma.PriceUncheckedCreateWithoutSubscriptionsInput> = z.object({
  id: z.string().uuid().optional(),
  productId: z.string().optional().nullable(),
  active: z.boolean().optional().nullable(),
  description: z.string().optional().nullable(),
  unitAmount: z.bigint().optional().nullable(),
  currency: z.string().optional().nullable(),
  type: z.lazy(() => pricing_typeSchema).optional().nullable(),
  interval: z.lazy(() => pricing_plan_intervalSchema).optional().nullable(),
  intervalCount: z.number().int().optional().nullable(),
  trialPeriodDays: z.number().int().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
}).strict();

export default PriceUncheckedCreateWithoutSubscriptionsInputSchema;
