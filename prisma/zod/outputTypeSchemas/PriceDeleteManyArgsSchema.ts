import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceWhereInputSchema } from '../inputTypeSchemas/PriceWhereInputSchema'

export const PriceDeleteManyArgsSchema: z.ZodType<Prisma.PriceDeleteManyArgs> = z.object({
  where: PriceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PriceDeleteManyArgsSchema;
