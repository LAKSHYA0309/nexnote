import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { SubscriptionFindManyArgsSchema } from "../outputTypeSchemas/SubscriptionFindManyArgsSchema"
import { PriceCountOutputTypeArgsSchema } from "../outputTypeSchemas/PriceCountOutputTypeArgsSchema"

export const PriceSelectSchema: z.ZodType<Prisma.PriceSelect> = z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  active: z.boolean().optional(),
  description: z.boolean().optional(),
  unitAmount: z.boolean().optional(),
  currency: z.boolean().optional(),
  type: z.boolean().optional(),
  interval: z.boolean().optional(),
  intervalCount: z.boolean().optional(),
  trialPeriodDays: z.boolean().optional(),
  metadata: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  subscriptions: z.union([z.boolean(),z.lazy(() => SubscriptionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PriceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PriceSelectSchema;
