import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CollaboratorCreateManyUserInputSchema: z.ZodType<Prisma.CollaboratorCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default CollaboratorCreateManyUserInputSchema;
