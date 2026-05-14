import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CollaboratorCreateManyInputSchema: z.ZodType<Prisma.CollaboratorCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export default CollaboratorCreateManyInputSchema;
