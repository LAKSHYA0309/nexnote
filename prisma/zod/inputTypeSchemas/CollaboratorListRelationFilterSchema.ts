import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorWhereInputSchema } from './CollaboratorWhereInputSchema';

export const CollaboratorListRelationFilterSchema: z.ZodType<Prisma.CollaboratorListRelationFilter> = z.object({
  every: z.lazy(() => CollaboratorWhereInputSchema).optional(),
  some: z.lazy(() => CollaboratorWhereInputSchema).optional(),
  none: z.lazy(() => CollaboratorWhereInputSchema).optional()
}).strict();

export default CollaboratorListRelationFilterSchema;
