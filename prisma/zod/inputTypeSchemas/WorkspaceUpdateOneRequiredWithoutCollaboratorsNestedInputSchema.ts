import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutCollaboratorsInputSchema } from './WorkspaceCreateWithoutCollaboratorsInputSchema';
import { WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema } from './WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema';
import { WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema } from './WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema';
import { WorkspaceUpsertWithoutCollaboratorsInputSchema } from './WorkspaceUpsertWithoutCollaboratorsInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateToOneWithWhereWithoutCollaboratorsInputSchema } from './WorkspaceUpdateToOneWithWhereWithoutCollaboratorsInputSchema';
import { WorkspaceUpdateWithoutCollaboratorsInputSchema } from './WorkspaceUpdateWithoutCollaboratorsInputSchema';
import { WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema } from './WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema';

export const WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUpdateWithoutCollaboratorsInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutCollaboratorsInputSchema) ]).optional(),
}).strict();

export default WorkspaceUpdateOneRequiredWithoutCollaboratorsNestedInputSchema;
