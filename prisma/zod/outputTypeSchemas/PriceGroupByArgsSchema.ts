import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceWhereInputSchema } from '../inputTypeSchemas/PriceWhereInputSchema'
import { PriceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PriceOrderByWithAggregationInputSchema'
import { PriceScalarFieldEnumSchema } from '../inputTypeSchemas/PriceScalarFieldEnumSchema'
import { PriceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PriceScalarWhereWithAggregatesInputSchema'

export const PriceGroupByArgsSchema: z.ZodType<Prisma.PriceGroupByArgs> = z.object({
  where: PriceWhereInputSchema.optional(),
  orderBy: z.union([ PriceOrderByWithAggregationInputSchema.array(),PriceOrderByWithAggregationInputSchema ]).optional(),
  by: PriceScalarFieldEnumSchema.array(),
  having: PriceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PriceGroupByArgsSchema;
