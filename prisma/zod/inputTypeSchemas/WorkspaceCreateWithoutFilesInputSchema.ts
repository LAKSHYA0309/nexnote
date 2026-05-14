import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateNestedManyWithoutWorkspaceInputSchema } from './FolderCreateNestedManyWithoutWorkspaceInputSchema';
import { CollaboratorCreateNestedManyWithoutWorkspaceInputSchema } from './CollaboratorCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateWithoutFilesInputSchema: z.ZodType<Prisma.WorkspaceCreateWithoutFilesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  workspaceOwner: z.string(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().optional().nullable(),
  inTrash: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  bannerUrl: z.string().optional().nullable(),
  folders: z.lazy(() => FolderCreateNestedManyWithoutWorkspaceInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateWithoutFilesInputSchema;
