import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionIncludeSchema } from '../inputTypeSchemas/SubscriptionIncludeSchema'
import { SubscriptionWhereInputSchema } from '../inputTypeSchemas/SubscriptionWhereInputSchema'
import { SubscriptionOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubscriptionOrderByWithRelationInputSchema'
import { SubscriptionWhereUniqueInputSchema } from '../inputTypeSchemas/SubscriptionWhereUniqueInputSchema'
import { SubscriptionScalarFieldEnumSchema } from '../inputTypeSchemas/SubscriptionScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PriceArgsSchema } from "../outputTypeSchemas/PriceArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const SubscriptionFindManyArgsSchema: z.ZodType<Prisma.SubscriptionFindManyArgs> = z.object({
  select: SubscriptionSelectSchema.optional(),
  include: z.lazy(() => SubscriptionIncludeSchema).optional(),
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithRelationInputSchema.array(),SubscriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SubscriptionScalarFieldEnumSchema,SubscriptionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SubscriptionFindManyArgsSchema;
