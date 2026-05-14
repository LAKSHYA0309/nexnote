import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FolderListRelationFilterSchema } from './FolderListRelationFilterSchema';
import { FileListRelationFilterSchema } from './FileListRelationFilterSchema';
import { CollaboratorListRelationFilterSchema } from './CollaboratorListRelationFilterSchema';

export const WorkspaceWhereUniqueInputSchema: z.ZodType<Prisma.WorkspaceWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => WorkspaceWhereInputSchema),z.lazy(() => WorkspaceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkspaceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkspaceWhereInputSchema),z.lazy(() => WorkspaceWhereInputSchema).array() ]).optional(),
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
}).strict());

export default WorkspaceWhereUniqueInputSchema;
