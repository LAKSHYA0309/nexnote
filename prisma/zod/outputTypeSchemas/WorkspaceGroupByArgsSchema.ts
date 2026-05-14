import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereInputSchema } from '../inputTypeSchemas/WorkspaceWhereInputSchema'
import { WorkspaceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WorkspaceOrderByWithAggregationInputSchema'
import { WorkspaceScalarFieldEnumSchema } from '../inputTypeSchemas/WorkspaceScalarFieldEnumSchema'
import { WorkspaceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WorkspaceScalarWhereWithAggregatesInputSchema'

export const WorkspaceGroupByArgsSchema: z.ZodType<Prisma.WorkspaceGroupByArgs> = z.object({
  where: WorkspaceWhereInputSchema.optional(),
  orderBy: z.union([ WorkspaceOrderByWithAggregationInputSchema.array(),WorkspaceOrderByWithAggregationInputSchema ]).optional(),
  by: WorkspaceScalarFieldEnumSchema.array(),
  having: WorkspaceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WorkspaceGroupByArgsSchema;
