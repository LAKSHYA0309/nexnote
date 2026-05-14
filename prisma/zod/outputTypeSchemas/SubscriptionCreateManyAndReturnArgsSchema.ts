import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionCreateManyInputSchema } from '../inputTypeSchemas/SubscriptionCreateManyInputSchema'

export const SubscriptionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubscriptionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SubscriptionCreateManyInputSchema,SubscriptionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SubscriptionCreateManyAndReturnArgsSchema;
