import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceWhereInputSchema } from '../inputTypeSchemas/PriceWhereInputSchema'
import { PriceOrderByWithRelationInputSchema } from '../inputTypeSchemas/PriceOrderByWithRelationInputSchema'
import { PriceWhereUniqueInputSchema } from '../inputTypeSchemas/PriceWhereUniqueInputSchema'

export const PriceAggregateArgsSchema: z.ZodType<Prisma.PriceAggregateArgs> = z.object({
  where: PriceWhereInputSchema.optional(),
  orderBy: z.union([ PriceOrderByWithRelationInputSchema.array(),PriceOrderByWithRelationInputSchema ]).optional(),
  cursor: PriceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PriceAggregateArgsSchema;
