import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WorkspaceOrderByWithRelationInputSchema } from './WorkspaceOrderByWithRelationInputSchema';
import { FileOrderByRelationAggregateInputSchema } from './FileOrderByRelationAggregateInputSchema';

export const FolderOrderByWithRelationInputSchema: z.ZodType<Prisma.FolderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  iconId: z.lazy(() => SortOrderSchema).optional(),
  data: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  inTrash: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bannerUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  workspaceId: z.lazy(() => SortOrderSchema).optional(),
  workspace: z.lazy(() => WorkspaceOrderByWithRelationInputSchema).optional(),
  files: z.lazy(() => FileOrderByRelationAggregateInputSchema).optional()
}).strict();

export default FolderOrderByWithRelationInputSchema;
