import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutFoldersInputSchema } from './WorkspaceCreateWithoutFoldersInputSchema';
import { WorkspaceUncheckedCreateWithoutFoldersInputSchema } from './WorkspaceUncheckedCreateWithoutFoldersInputSchema';
import { WorkspaceCreateOrConnectWithoutFoldersInputSchema } from './WorkspaceCreateOrConnectWithoutFoldersInputSchema';
import { WorkspaceUpsertWithoutFoldersInputSchema } from './WorkspaceUpsertWithoutFoldersInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateToOneWithWhereWithoutFoldersInputSchema } from './WorkspaceUpdateToOneWithWhereWithoutFoldersInputSchema';
import { WorkspaceUpdateWithoutFoldersInputSchema } from './WorkspaceUpdateWithoutFoldersInputSchema';
import { WorkspaceUncheckedUpdateWithoutFoldersInputSchema } from './WorkspaceUncheckedUpdateWithoutFoldersInputSchema';

export const WorkspaceUpdateOneRequiredWithoutFoldersNestedInputSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutFoldersNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFoldersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFoldersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutFoldersInputSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutFoldersInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutFoldersInputSchema),z.lazy(() => WorkspaceUpdateWithoutFoldersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutFoldersInputSchema) ]).optional(),
}).strict();

export default WorkspaceUpdateOneRequiredWithoutFoldersNestedInputSchema;
