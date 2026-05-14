import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  stripeCustomerId: z.boolean().optional(),
}).strict()

export const CustomerFindUniqueArgsSchema: z.ZodType<Prisma.CustomerFindUniqueArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  where: CustomerWhereUniqueInputSchema,
}).strict() ;

export default CustomerFindUniqueArgsSchema;
