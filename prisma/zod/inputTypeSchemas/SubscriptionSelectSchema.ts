import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PriceArgsSchema } from "../outputTypeSchemas/PriceArgsSchema"

export const SubscriptionSelectSchema: z.ZodType<Prisma.SubscriptionSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  status: z.boolean().optional(),
  metadata: z.boolean().optional(),
  priceId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  cancelAtPeriodEnd: z.boolean().optional(),
  created: z.boolean().optional(),
  currentPeriodStart: z.boolean().optional(),
  currentPeriodEnd: z.boolean().optional(),
  endedAt: z.boolean().optional(),
  cancelAt: z.boolean().optional(),
  canceledAt: z.boolean().optional(),
  trialStart: z.boolean().optional(),
  trialEnd: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  price: z.union([z.boolean(),z.lazy(() => PriceArgsSchema)]).optional(),
}).strict()

export default SubscriptionSelectSchema;
