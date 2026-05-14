import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereInputSchema } from '../inputTypeSchemas/CustomerWhereInputSchema'
import { CustomerOrderByWithRelationInputSchema } from '../inputTypeSchemas/CustomerOrderByWithRelationInputSchema'
import { CustomerWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerWhereUniqueInputSchema'
import { CustomerScalarFieldEnumSchema } from '../inputTypeSchemas/CustomerScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  stripeCustomerId: z.boolean().optional(),
}).strict()

export const CustomerFindFirstArgsSchema: z.ZodType<Prisma.CustomerFindFirstArgs> = z.object({
  select: CustomerSelectSchema.optional(),
  where: CustomerWhereInputSchema.optional(),
  orderBy: z.union([ CustomerOrderByWithRelationInputSchema.array(),CustomerOrderByWithRelationInputSchema ]).optional(),
  cursor: CustomerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CustomerScalarFieldEnumSchema,CustomerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CustomerFindFirstArgsSchema;
