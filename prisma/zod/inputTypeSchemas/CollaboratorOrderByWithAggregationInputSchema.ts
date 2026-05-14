import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CollaboratorCountOrderByAggregateInputSchema } from './CollaboratorCountOrderByAggregateInputSchema';
import { CollaboratorMaxOrderByAggregateInputSchema } from './CollaboratorMaxOrderByAggregateInputSchema';
import { CollaboratorMinOrderByAggregateInputSchema } from './CollaboratorMinOrderByAggregateInputSchema';

export const CollaboratorOrderByWithAggregationInputSchema: z.ZodType<Prisma.CollaboratorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CollaboratorCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CollaboratorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CollaboratorMinOrderByAggregateInputSchema).optional()
}).strict();

export default CollaboratorOrderByWithAggregationInputSchema;
