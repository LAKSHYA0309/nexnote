import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerCreateInputSchema } from '../inputTypeSchemas/CustomerCreateInputSchema'
import { CustomerUncheckedCreateInputSchema } from '../inputTypeSchemas/CustomerUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  stripeCustomerId: z.boolean().optional(),
}).strict()

export const CustomerCreateArgsSchema: z.ZodType<Prisma.CustomerCreateArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  data: z.union([ CustomerCreateInputSchema,CustomerUncheckedCreateInputSchema ]),
}).strict() ;

export default CustomerCreateArgsSchema;
