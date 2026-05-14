import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionWhereInputSchema } from '../inputTypeSchemas/SubscriptionWhereInputSchema'
import { SubscriptionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SubscriptionOrderByWithAggregationInputSchema'
import { SubscriptionScalarFieldEnumSchema } from '../inputTypeSchemas/SubscriptionScalarFieldEnumSchema'
import { SubscriptionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SubscriptionScalarWhereWithAggregatesInputSchema'

export const SubscriptionGroupByArgsSchema: z.ZodType<Prisma.SubscriptionGroupByArgs> = z.object({
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithAggregationInputSchema.array(),SubscriptionOrderByWithAggregationInputSchema ]).optional(),
  by: SubscriptionScalarFieldEnumSchema.array(),
  having: SubscriptionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubscriptionGroupByArgsSchema;
