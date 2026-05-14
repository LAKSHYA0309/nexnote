import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceUpdateManyMutationInputSchema } from '../inputTypeSchemas/PriceUpdateManyMutationInputSchema'
import { PriceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PriceUncheckedUpdateManyInputSchema'
import { PriceWhereInputSchema } from '../inputTypeSchemas/PriceWhereInputSchema'

export const PriceUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PriceUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PriceUpdateManyMutationInputSchema,PriceUncheckedUpdateManyInputSchema ]),
  where: PriceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PriceUpdateManyAndReturnArgsSchema;
