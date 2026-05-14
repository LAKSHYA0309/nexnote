import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const FolderScalarWhereInputSchema: z.ZodType<Prisma.FolderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => FolderScalarWhereInputSchema),z.lazy(() => FolderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => FolderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => FolderScalarWhereInputSchema),z.lazy(() => FolderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  iconId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  data: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  inTrash: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bannerUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default FolderScalarWhereInputSchema;
