import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { FolderUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './FolderUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';
import { CollaboratorUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './CollaboratorUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';

export const WorkspaceUncheckedUpdateWithoutFilesInputSchema: z.ZodType<Prisma.WorkspaceUncheckedUpdateWithoutFilesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  workspaceOwner: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  iconId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  inTrash: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bannerUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  folders: z.lazy(() => FolderUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional()
}).strict();

export default WorkspaceUncheckedUpdateWithoutFilesInputSchema;
