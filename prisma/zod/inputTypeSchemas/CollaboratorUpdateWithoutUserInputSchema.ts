import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema } from './WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema';

export const CollaboratorUpdateWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema).optional()
}).strict();

export default CollaboratorUpdateWithoutUserInputSchema;
