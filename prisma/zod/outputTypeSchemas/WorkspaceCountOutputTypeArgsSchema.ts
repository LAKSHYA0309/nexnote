import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WorkspaceCountOutputTypeSelectSchema } from './WorkspaceCountOutputTypeSelectSchema';

export const WorkspaceCountOutputTypeArgsSchema: z.ZodType<Prisma.WorkspaceCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => WorkspaceCountOutputTypeSelectSchema).nullish(),
}).strict();

export default WorkspaceCountOutputTypeSelectSchema;
