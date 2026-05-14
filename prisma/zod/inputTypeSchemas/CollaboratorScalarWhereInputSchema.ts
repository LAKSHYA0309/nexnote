import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CollaboratorScalarWhereInputSchema: z.ZodType<Prisma.CollaboratorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollaboratorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default CollaboratorScalarWhereInputSchema;
