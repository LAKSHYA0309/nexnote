import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateNestedManyWithoutWorkspaceInputSchema } from './FolderCreateNestedManyWithoutWorkspaceInputSchema';
import { FileCreateNestedManyWithoutWorkspaceInputSchema } from './FileCreateNestedManyWithoutWorkspaceInputSchema';
import { CollaboratorCreateNestedManyWithoutWorkspaceInputSchema } from './CollaboratorCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateInputSchema: z.ZodType<Prisma.WorkspaceCreateInput> = z.object({
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
  files: z.lazy(() => FileCreateNestedManyWithoutWorkspaceInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateInputSchema;
