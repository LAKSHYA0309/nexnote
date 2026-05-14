import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceSelectSchema } from '../inputTypeSchemas/WorkspaceSelectSchema';
import { WorkspaceIncludeSchema } from '../inputTypeSchemas/WorkspaceIncludeSchema';

export const WorkspaceArgsSchema: z.ZodType<Prisma.WorkspaceDefaultArgs> = z.object({
  select: z.lazy(() => WorkspaceSelectSchema).optional(),
  include: z.lazy(() => WorkspaceIncludeSchema).optional(),
}).strict();

export default WorkspaceArgsSchema;
