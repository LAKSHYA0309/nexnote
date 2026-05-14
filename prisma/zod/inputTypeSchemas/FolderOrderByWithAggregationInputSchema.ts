import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { FolderCountOrderByAggregateInputSchema } from './FolderCountOrderByAggregateInputSchema';
import { FolderMaxOrderByAggregateInputSchema } from './FolderMaxOrderByAggregateInputSchema';
import { FolderMinOrderByAggregateInputSchema } from './FolderMinOrderByAggregateInputSchema';

export const FolderOrderByWithAggregationInputSchema: z.ZodType<Prisma.FolderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  iconId: z.lazy(() => SortOrderSchema).optional(),
  data: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  inTrash: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bannerUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => FolderCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => FolderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => FolderMinOrderByAggregateInputSchema).optional()
}).strict();

export default FolderOrderByWithAggregationInputSchema;
