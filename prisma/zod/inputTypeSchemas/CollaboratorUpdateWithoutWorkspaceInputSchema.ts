import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';

export const CollaboratorUpdateWithoutWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithoutWorkspaceInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export default CollaboratorUpdateWithoutWorkspaceInputSchema;
