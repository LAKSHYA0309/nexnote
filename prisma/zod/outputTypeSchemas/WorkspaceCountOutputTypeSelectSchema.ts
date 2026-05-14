import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const WorkspaceCountOutputTypeSelectSchema: z.ZodType<Prisma.WorkspaceCountOutputTypeSelect> = z.object({
  folders: z.boolean().optional(),
  files: z.boolean().optional(),
  collaborators: z.boolean().optional(),
}).strict();

export default WorkspaceCountOutputTypeSelectSchema;
