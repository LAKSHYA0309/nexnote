import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereInputSchema } from '../inputTypeSchemas/CollaboratorWhereInputSchema'
import { CollaboratorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CollaboratorOrderByWithAggregationInputSchema'
import { CollaboratorScalarFieldEnumSchema } from '../inputTypeSchemas/CollaboratorScalarFieldEnumSchema'
import { CollaboratorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CollaboratorScalarWhereWithAggregatesInputSchema'

export const CollaboratorGroupByArgsSchema: z.ZodType<Prisma.CollaboratorGroupByArgs> = z.object({
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithAggregationInputSchema.array(),CollaboratorOrderByWithAggregationInputSchema ]).optional(),
  by: CollaboratorScalarFieldEnumSchema.array(),
  having: CollaboratorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CollaboratorGroupByArgsSchema;
