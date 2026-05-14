import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutFilesInputSchema } from './WorkspaceCreateWithoutFilesInputSchema';
import { WorkspaceUncheckedCreateWithoutFilesInputSchema } from './WorkspaceUncheckedCreateWithoutFilesInputSchema';
import { WorkspaceCreateOrConnectWithoutFilesInputSchema } from './WorkspaceCreateOrConnectWithoutFilesInputSchema';
import { WorkspaceUpsertWithoutFilesInputSchema } from './WorkspaceUpsertWithoutFilesInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateToOneWithWhereWithoutFilesInputSchema } from './WorkspaceUpdateToOneWithWhereWithoutFilesInputSchema';
import { WorkspaceUpdateWithoutFilesInputSchema } from './WorkspaceUpdateWithoutFilesInputSchema';
import { WorkspaceUncheckedUpdateWithoutFilesInputSchema } from './WorkspaceUncheckedUpdateWithoutFilesInputSchema';

export const WorkspaceUpdateOneRequiredWithoutFilesNestedInputSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutFilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFilesInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutFilesInputSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutFilesInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutFilesInputSchema),z.lazy(() => WorkspaceUpdateWithoutFilesInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutFilesInputSchema) ]).optional(),
}).strict();

export default WorkspaceUpdateOneRequiredWithoutFilesNestedInputSchema;
