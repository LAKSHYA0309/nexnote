import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceScalarRelationFilterSchema: z.ZodType<Prisma.WorkspaceScalarRelationFilter> = z.object({
  is: z.lazy(() => WorkspaceWhereInputSchema).optional(),
  isNot: z.lazy(() => WorkspaceWhereInputSchema).optional()
}).strict();

export default WorkspaceScalarRelationFilterSchema;
