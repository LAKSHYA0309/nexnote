import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './FolderUncheckedCreateNestedManyWithoutWorkspaceInputSchema';
import { FileUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './FileUncheckedCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutCollaboratorsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  workspaceOwner: z.string(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  folders: z.lazy(() => FolderUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional(),
  files: z.lazy(() => FileUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema;
