import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionWhereInputSchema } from '../inputTypeSchemas/SubscriptionWhereInputSchema'

export const SubscriptionDeleteManyArgsSchema: z.ZodType<Prisma.SubscriptionDeleteManyArgs> = z.object({
  where: SubscriptionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SubscriptionDeleteManyArgsSchema;
