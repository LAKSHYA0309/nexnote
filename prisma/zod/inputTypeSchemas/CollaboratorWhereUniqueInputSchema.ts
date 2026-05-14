import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorUserIdWorkspaceIdCompoundUniqueInputSchema } from './CollaboratorUserIdWorkspaceIdCompoundUniqueInputSchema';
import { CollaboratorWhereInputSchema } from './CollaboratorWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { WorkspaceScalarRelationFilterSchema } from './WorkspaceScalarRelationFilterSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const CollaboratorWhereUniqueInputSchema: z.ZodType<Prisma.CollaboratorWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    userId_workspaceId: z.lazy(() => CollaboratorUserIdWorkspaceIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    userId_workspaceId: z.lazy(() => CollaboratorUserIdWorkspaceIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  userId_workspaceId: z.lazy(() => CollaboratorUserIdWorkspaceIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CollaboratorWhereInputSchema),z.lazy(() => CollaboratorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CollaboratorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CollaboratorWhereInputSchema),z.lazy(() => CollaboratorWhereInputSchema).array() ]).optional(),
  workspaceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  workspace: z.union([ z.lazy(() => WorkspaceScalarRelationFilterSchema),z.lazy(() => WorkspaceWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default CollaboratorWhereUniqueInputSchema;
