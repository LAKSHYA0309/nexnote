import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PriceArgsSchema } from "../outputTypeSchemas/PriceArgsSchema"

export const SubscriptionIncludeSchema: z.ZodType<Prisma.SubscriptionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  price: z.union([z.boolean(),z.lazy(() => PriceArgsSchema)]).optional(),
}).strict()

export default SubscriptionIncludeSchema;
