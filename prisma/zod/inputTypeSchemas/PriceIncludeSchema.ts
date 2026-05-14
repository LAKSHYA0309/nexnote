import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { SubscriptionFindManyArgsSchema } from "../outputTypeSchemas/SubscriptionFindManyArgsSchema"
import { PriceCountOutputTypeArgsSchema } from "../outputTypeSchemas/PriceCountOutputTypeArgsSchema"

export const PriceIncludeSchema: z.ZodType<Prisma.PriceInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  subscriptions: z.union([z.boolean(),z.lazy(() => SubscriptionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PriceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PriceIncludeSchema;
