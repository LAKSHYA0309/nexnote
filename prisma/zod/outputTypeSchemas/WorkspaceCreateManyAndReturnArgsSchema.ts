import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCreateManyInputSchema } from '../inputTypeSchemas/WorkspaceCreateManyInputSchema'

export const WorkspaceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WorkspaceCreateManyAndReturnArgs> = z.object({
  data: z.union([ WorkspaceCreateManyInputSchema,WorkspaceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WorkspaceCreateManyAndReturnArgsSchema;
