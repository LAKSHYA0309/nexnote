import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUpdateWithoutFoldersInputSchema } from './WorkspaceUpdateWithoutFoldersInputSchema';
import { WorkspaceUncheckedUpdateWithoutFoldersInputSchema } from './WorkspaceUncheckedUpdateWithoutFoldersInputSchema';
import { WorkspaceCreateWithoutFoldersInputSchema } from './WorkspaceCreateWithoutFoldersInputSchema';
import { WorkspaceUncheckedCreateWithoutFoldersInputSchema } from './WorkspaceUncheckedCreateWithoutFoldersInputSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceUpsertWithoutFoldersInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutFoldersInput> = z.object({
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutFoldersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutFoldersInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFoldersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFoldersInputSchema) ]),
  where: z.lazy(() => WorkspaceWhereInputSchema).optional()
}).strict();

export default WorkspaceUpsertWithoutFoldersInputSchema;
