import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CollaboratorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  workspaceId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default CollaboratorUncheckedCreateWithoutUserInputSchema;
