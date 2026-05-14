import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CollaboratorUserIdWorkspaceIdCompoundUniqueInputSchema: z.ZodType<Prisma.CollaboratorUserIdWorkspaceIdCompoundUniqueInput> = z.object({
  userId: z.string(),
  workspaceId: z.string()
}).strict();

export default CollaboratorUserIdWorkspaceIdCompoundUniqueInputSchema;
