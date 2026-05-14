import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutFoldersInputSchema } from './WorkspaceCreateWithoutFoldersInputSchema';
import { WorkspaceUncheckedCreateWithoutFoldersInputSchema } from './WorkspaceUncheckedCreateWithoutFoldersInputSchema';
import { WorkspaceCreateOrConnectWithoutFoldersInputSchema } from './WorkspaceCreateOrConnectWithoutFoldersInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';

export const WorkspaceCreateNestedOneWithoutFoldersInputSchema: z.ZodType<Prisma.WorkspaceCreateNestedOneWithoutFoldersInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFoldersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFoldersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutFoldersInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional()
}).strict();

export default WorkspaceCreateNestedOneWithoutFoldersInputSchema;
