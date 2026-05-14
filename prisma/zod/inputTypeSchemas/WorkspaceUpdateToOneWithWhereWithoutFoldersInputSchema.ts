import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { WorkspaceUpdateWithoutFoldersInputSchema } from './WorkspaceUpdateWithoutFoldersInputSchema';
import { WorkspaceUncheckedUpdateWithoutFoldersInputSchema } from './WorkspaceUncheckedUpdateWithoutFoldersInputSchema';

export const WorkspaceUpdateToOneWithWhereWithoutFoldersInputSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutFoldersInput> = z.object({
  where: z.lazy(() => WorkspaceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkspaceUpdateWithoutFoldersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutFoldersInputSchema) ]),
}).strict();

export default WorkspaceUpdateToOneWithWhereWithoutFoldersInputSchema;
