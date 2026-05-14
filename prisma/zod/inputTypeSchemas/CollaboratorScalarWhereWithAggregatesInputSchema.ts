import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CollaboratorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CollaboratorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema),z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema),z.lazy(() => CollaboratorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  workspaceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default CollaboratorScalarWhereWithAggregatesInputSchema;
