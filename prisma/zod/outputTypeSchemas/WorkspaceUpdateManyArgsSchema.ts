import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceUpdateManyMutationInputSchema } from '../inputTypeSchemas/WorkspaceUpdateManyMutationInputSchema'
import { WorkspaceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WorkspaceUncheckedUpdateManyInputSchema'
import { WorkspaceWhereInputSchema } from '../inputTypeSchemas/WorkspaceWhereInputSchema'

export const WorkspaceUpdateManyArgsSchema: z.ZodType<Prisma.WorkspaceUpdateManyArgs> = z.object({
  data: z.union([ WorkspaceUpdateManyMutationInputSchema,WorkspaceUncheckedUpdateManyInputSchema ]),
  where: WorkspaceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WorkspaceUpdateManyArgsSchema;
