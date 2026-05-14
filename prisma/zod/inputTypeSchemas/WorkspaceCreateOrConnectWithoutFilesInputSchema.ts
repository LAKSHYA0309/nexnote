import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceCreateWithoutFilesInputSchema } from './WorkspaceCreateWithoutFilesInputSchema';
import { WorkspaceUncheckedCreateWithoutFilesInputSchema } from './WorkspaceUncheckedCreateWithoutFilesInputSchema';

export const WorkspaceCreateOrConnectWithoutFilesInputSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutFilesInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFilesInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFilesInputSchema) ]),
}).strict();

export default WorkspaceCreateOrConnectWithoutFilesInputSchema;
