import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { WorkspaceUpdateWithoutCollaboratorsInputSchema } from './WorkspaceUpdateWithoutCollaboratorsInputSchema';
import { WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema } from './WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema';

export const WorkspaceUpdateToOneWithWhereWithoutCollaboratorsInputSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => WorkspaceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkspaceUpdateWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default WorkspaceUpdateToOneWithWhereWithoutCollaboratorsInputSchema;
