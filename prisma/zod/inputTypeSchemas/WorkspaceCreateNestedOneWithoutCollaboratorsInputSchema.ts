import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutCollaboratorsInputSchema } from './WorkspaceCreateWithoutCollaboratorsInputSchema';
import { WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema } from './WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema';
import { WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema } from './WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';

export const WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutCollaboratorsInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional()
}).strict();

export default WorkspaceCreateNestedOneWithoutCollaboratorsInputSchema;
