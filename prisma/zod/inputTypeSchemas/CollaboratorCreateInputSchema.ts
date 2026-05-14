import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema } from './WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema';
import { UserCreateNestedOneWithoutCollaboratorsInputSchema } from './UserCreateNestedOneWithoutCollaboratorsInputSchema';

export const CollaboratorCreateInputSchema: z.ZodType<Prisma.CollaboratorCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export default CollaboratorCreateInputSchema;
