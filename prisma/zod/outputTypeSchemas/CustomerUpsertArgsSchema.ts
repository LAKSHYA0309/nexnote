import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerWhereUniqueInputSchema'
import { CustomerCreateInputSchema } from '../inputTypeSchemas/CustomerCreateInputSchema'
import { CustomerUncheckedCreateInputSchema } from '../inputTypeSchemas/CustomerUncheckedCreateInputSchema'
import { CustomerUpdateInputSchema } from '../inputTypeSchemas/CustomerUpdateInputSchema'
import { CustomerUncheckedUpdateInputSchema } from '../inputTypeSchemas/CustomerUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  stripeCustomerId: z.boolean().optional(),
}).strict()

export const CustomerUpsertArgsSchema: z.ZodType<Prisma.CustomerUpsertArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  where: CustomerWhereUniqueInputSchema,
  create: z.union([ CustomerCreateInputSchema,CustomerUncheckedCreateInputSchema ]),
  update: z.union([ CustomerUpdateInputSchema,CustomerUncheckedUpdateInputSchema ]),
}).strict() ;

export default CustomerUpsertArgsSchema;
