import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereInputSchema } from '../inputTypeSchemas/CollaboratorWhereInputSchema'
import { CollaboratorOrderByWithRelationInputSchema } from '../inputTypeSchemas/CollaboratorOrderByWithRelationInputSchema'
import { CollaboratorWhereUniqueInputSchema } from '../inputTypeSchemas/CollaboratorWhereUniqueInputSchema'

export const CollaboratorAggregateArgsSchema: z.ZodType<Prisma.CollaboratorAggregateArgs> = z.object({
  where: CollaboratorWhereInputSchema.optional(),
  orderBy: z.union([ CollaboratorOrderByWithRelationInputSchema.array(),CollaboratorOrderByWithRelationInputSchema ]).optional(),
  cursor: CollaboratorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CollaboratorAggregateArgsSchema;
