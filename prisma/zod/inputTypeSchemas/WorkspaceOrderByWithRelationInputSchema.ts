import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { FolderOrderByRelationAggregateInputSchema } from './FolderOrderByRelationAggregateInputSchema';
import { FileOrderByRelationAggregateInputSchema } from './FileOrderByRelationAggregateInputSchema';
import { CollaboratorOrderByRelationAggregateInputSchema } from './CollaboratorOrderByRelationAggregateInputSchema';

export const WorkspaceOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkspaceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  workspaceOwner: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  iconId: z.lazy(() => SortOrderSchema).optional(),
  data: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  inTrash: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  logo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bannerUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  folders: z.lazy(() => FolderOrderByRelationAggregateInputSchema).optional(),
  files: z.lazy(() => FileOrderByRelationAggregateInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorOrderByRelationAggregateInputSchema).optional()
}).strict();

export default WorkspaceOrderByWithRelationInputSchema;
