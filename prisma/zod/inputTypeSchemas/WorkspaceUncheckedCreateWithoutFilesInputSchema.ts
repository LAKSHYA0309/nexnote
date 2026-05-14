import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './FolderUncheckedCreateNestedManyWithoutWorkspaceInputSchema';
import { CollaboratorUncheckedCreateNestedManyWithoutWorkspaceInputSchema } from './CollaboratorUncheckedCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceUncheckedCreateWithoutFilesInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateWithoutFilesInput> = z.object({
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
  collaborators: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceUncheckedCreateWithoutFilesInputSchema;
