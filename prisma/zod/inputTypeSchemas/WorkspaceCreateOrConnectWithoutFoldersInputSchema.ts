import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceCreateWithoutFoldersInputSchema } from './WorkspaceCreateWithoutFoldersInputSchema';
import { WorkspaceUncheckedCreateWithoutFoldersInputSchema } from './WorkspaceUncheckedCreateWithoutFoldersInputSchema';

export const WorkspaceCreateOrConnectWithoutFoldersInputSchema: z.ZodType<Prisma.WorkspaceCreateOrConnectWithoutFoldersInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFoldersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFoldersInputSchema) ]),
}).strict();

export default WorkspaceCreateOrConnectWithoutFoldersInputSchema;
