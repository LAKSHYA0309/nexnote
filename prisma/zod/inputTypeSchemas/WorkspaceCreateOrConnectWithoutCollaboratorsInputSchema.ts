import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceCreateWithoutCollaboratorsInputSchema } from './WorkspaceCreateWithoutCollaboratorsInputSchema';
import { WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema } from './WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema';

export const WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema;
