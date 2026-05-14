import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceCreateManyInputSchema } from '../inputTypeSchemas/PriceCreateManyInputSchema'

export const PriceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PriceCreateManyAndReturnArgs> = z.object({
  data: z.union([ PriceCreateManyInputSchema,PriceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PriceCreateManyAndReturnArgsSchema;
