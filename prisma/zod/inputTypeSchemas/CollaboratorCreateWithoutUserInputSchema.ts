import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema } from './WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema';

export const CollaboratorCreateWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  workspace: z.lazy(() => WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema)
}).strict();

export default CollaboratorCreateWithoutUserInputSchema;
