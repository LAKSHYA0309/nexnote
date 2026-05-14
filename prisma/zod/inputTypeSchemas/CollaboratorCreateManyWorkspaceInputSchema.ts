import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CollaboratorCreateManyWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorCreateManyWorkspaceInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export default CollaboratorCreateManyWorkspaceInputSchema;
