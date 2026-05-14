import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereInputSchema } from '../inputTypeSchemas/WorkspaceWhereInputSchema'
import { WorkspaceOrderByWithRelationInputSchema } from '../inputTypeSchemas/WorkspaceOrderByWithRelationInputSchema'
import { WorkspaceWhereUniqueInputSchema } from '../inputTypeSchemas/WorkspaceWhereUniqueInputSchema'

export const WorkspaceAggregateArgsSchema: z.ZodType<Prisma.WorkspaceAggregateArgs> = z.object({
  where: WorkspaceWhereInputSchema.optional(),
  orderBy: z.union([ WorkspaceOrderByWithRelationInputSchema.array(),WorkspaceOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkspaceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkspaceAggregateArgsSchema;
