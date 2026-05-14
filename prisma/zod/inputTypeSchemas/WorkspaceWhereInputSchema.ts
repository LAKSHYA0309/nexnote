import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FolderListRelationFilterSchema } from './FolderListRelationFilterSchema';
import { FileListRelationFilterSchema } from './FileListRelationFilterSchema';
import { CollaboratorListRelationFilterSchema } from './CollaboratorListRelationFilterSchema';

export const WorkspaceWhereInputSchema: z.ZodType<Prisma.WorkspaceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkspaceWhereInputSchema),z.lazy(() => WorkspaceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkspaceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkspaceWhereInputSchema),z.lazy(() => WorkspaceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  workspaceOwner: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  iconId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  inTrash: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bannerUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  folders: z.lazy(() => FolderListRelationFilterSchema).optional(),
  files: z.lazy(() => FileListRelationFilterSchema).optional(),
  collaborators: z.lazy(() => CollaboratorListRelationFilterSchema).optional()
}).strict();

export default WorkspaceWhereInputSchema;
