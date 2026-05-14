import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUpdateWithoutCollaboratorsInputSchema } from './WorkspaceUpdateWithoutCollaboratorsInputSchema';
import { WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema } from './WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema';
import { WorkspaceCreateWithoutCollaboratorsInputSchema } from './WorkspaceCreateWithoutCollaboratorsInputSchema';
import { WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema } from './WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceUpsertWithoutCollaboratorsInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutCollaboratorsInput> = z.object({
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema) ]),
  where: z.lazy(() => WorkspaceWhereInputSchema).optional()
}).strict();

export default WorkspaceUpsertWithoutCollaboratorsInputSchema;
