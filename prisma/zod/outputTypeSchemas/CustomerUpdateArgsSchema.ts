import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerUpdateInputSchema } from '../inputTypeSchemas/CustomerUpdateInputSchema'
import { CustomerUncheckedUpdateInputSchema } from '../inputTypeSchemas/CustomerUncheckedUpdateInputSchema'
import { CustomerWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  stripeCustomerId: z.boolean().optional(),
}).strict()

export const CustomerUpdateArgsSchema: z.ZodType<Prisma.CustomerUpdateArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  data: z.union([ CustomerUpdateInputSchema,CustomerUncheckedUpdateInputSchema ]),
  where: CustomerWhereUniqueInputSchema,
}).strict() ;

export default CustomerUpdateArgsSchema;
