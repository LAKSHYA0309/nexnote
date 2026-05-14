import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';
import { UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';

export const CollaboratorUpdateInputSchema: z.ZodType<Prisma.CollaboratorUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export default CollaboratorUpdateInputSchema;
