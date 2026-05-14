import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceWhereInputSchema } from '../inputTypeSchemas/WorkspaceWhereInputSchema'

export const WorkspaceDeleteManyArgsSchema: z.ZodType<Prisma.WorkspaceDeleteManyArgs> = z.object({
  where: WorkspaceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WorkspaceDeleteManyArgsSchema;
