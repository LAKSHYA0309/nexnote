import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCollaboratorsInputSchema } from './UserCreateNestedOneWithoutCollaboratorsInputSchema';

export const CollaboratorCreateWithoutWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorCreateWithoutWorkspaceInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export default CollaboratorCreateWithoutWorkspaceInputSchema;
