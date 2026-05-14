import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionUpdateManyMutationInputSchema } from '../inputTypeSchemas/SubscriptionUpdateManyMutationInputSchema'
import { SubscriptionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SubscriptionUncheckedUpdateManyInputSchema'
import { SubscriptionWhereInputSchema } from '../inputTypeSchemas/SubscriptionWhereInputSchema'

export const SubscriptionUpdateManyArgsSchema: z.ZodType<Prisma.SubscriptionUpdateManyArgs> = z.object({
  data: z.union([ SubscriptionUpdateManyMutationInputSchema,SubscriptionUncheckedUpdateManyInputSchema ]),
  where: SubscriptionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SubscriptionUpdateManyArgsSchema;
