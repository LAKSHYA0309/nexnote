import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateNestedManyWithoutWorkspaceInputSchema } from './FolderCreateNestedManyWithoutWorkspaceInputSchema';
import { FileCreateNestedManyWithoutWorkspaceInputSchema } from './FileCreateNestedManyWithoutWorkspaceInputSchema';

export const WorkspaceCreateWithoutCollaboratorsInputSchema: z.ZodType<Prisma.WorkspaceCreateWithoutCollaboratorsInput> = z.object({
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
  files: z.lazy(() => FileCreateNestedManyWithoutWorkspaceInputSchema).optional()
}).strict();

export default WorkspaceCreateWithoutCollaboratorsInputSchema;
