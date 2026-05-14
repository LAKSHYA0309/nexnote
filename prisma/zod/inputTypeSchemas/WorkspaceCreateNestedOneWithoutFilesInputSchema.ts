import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutFilesInputSchema } from './WorkspaceCreateWithoutFilesInputSchema';
import { WorkspaceUncheckedCreateWithoutFilesInputSchema } from './WorkspaceUncheckedCreateWithoutFilesInputSchema';
import { WorkspaceCreateOrConnectWithoutFilesInputSchema } from './WorkspaceCreateOrConnectWithoutFilesInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';

export const WorkspaceCreateNestedOneWithoutFilesInputSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutFilesInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFilesInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutFilesInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional()
}).strict();

export default WorkspaceCreateNestedOneWithoutFilesInputSchema;
