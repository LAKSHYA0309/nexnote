import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { WorkspaceScalarRelationFilterSchema } from './WorkspaceScalarRelationFilterSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { FileListRelationFilterSchema } from './FileListRelationFilterSchema';

export const FolderWhereInputSchema: z.ZodType<Prisma.FolderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FolderWhereInputSchema),z.lazy(() => FolderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FolderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FolderWhereInputSchema),z.lazy(() => FolderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  iconId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  inTrash: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bannerUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  workspace: z.union([ z.lazy(() => WorkspaceScalarRelationFilterSchema),z.lazy(() => WorkspaceWhereInputSchema) ]).optional(),
  files: z.lazy(() => FileListRelationFilterSchema).optional()
}).strict();

export default FolderWhereInputSchema;
