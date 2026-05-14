import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceIncludeSchema } from '../inputTypeSchemas/PriceIncludeSchema'
import { PriceWhereUniqueInputSchema } from '../inputTypeSchemas/PriceWhereUniqueInputSchema'
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { SubscriptionFindManyArgsSchema } from "../outputTypeSchemas/SubscriptionFindManyArgsSchema"
import { PriceCountOutputTypeArgsSchema } from "../outputTypeSchemas/PriceCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const PriceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PriceFindUniqueOrThrowArgs> = z.object({
  select: PriceSelectSchema.optional(),
  include: z.lazy(() => PriceIncludeSchema).optional(),
  where: PriceWhereUniqueInputSchema,
}).strict() ;

export default PriceFindUniqueOrThrowArgsSchema;
