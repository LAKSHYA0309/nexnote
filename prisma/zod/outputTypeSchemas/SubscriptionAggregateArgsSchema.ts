import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionWhereInputSchema } from '../inputTypeSchemas/SubscriptionWhereInputSchema'
import { SubscriptionOrderByWithRelationInputSchema } from '../inputTypeSchemas/SubscriptionOrderByWithRelationInputSchema'
import { SubscriptionWhereUniqueInputSchema } from '../inputTypeSchemas/SubscriptionWhereUniqueInputSchema'

export const SubscriptionAggregateArgsSchema: z.ZodType<Prisma.SubscriptionAggregateArgs> = z.object({
  where: SubscriptionWhereInputSchema.optional(),
  orderBy: z.union([ SubscriptionOrderByWithRelationInputSchema.array(),SubscriptionOrderByWithRelationInputSchema ]).optional(),
  cursor: SubscriptionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SubscriptionAggregateArgsSchema;
