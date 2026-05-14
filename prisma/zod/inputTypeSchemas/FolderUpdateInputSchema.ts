import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WorkspaceUpdateOneRequiredWithoutFoldersNestedInputSchema } from './WorkspaceUpdateOneRequiredWithoutFoldersNestedInputSchema';
import { FileUpdateManyWithoutFolderNestedInputSchema } from './FileUpdateManyWithoutFolderNestedInputSchema';

export const FolderUpdateInputSchema: z.ZodType<Prisma.FolderUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  iconId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  inTrash: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bannerUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  workspace: z.lazy(() => WorkspaceUpdateOneRequiredWithoutFoldersNestedInputSchema).optional(),
  files: z.lazy(() => FileUpdateManyWithoutFolderNestedInputSchema).optional()
}).strict();

export default FolderUpdateInputSchema;
