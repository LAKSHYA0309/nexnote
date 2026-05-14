import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { WorkspaceUpdateWithoutFilesInputSchema } from './WorkspaceUpdateWithoutFilesInputSchema';
import { WorkspaceUncheckedUpdateWithoutFilesInputSchema } from './WorkspaceUncheckedUpdateWithoutFilesInputSchema';

export const WorkspaceUpdateToOneWithWhereWithoutFilesInputSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutFilesInput> = z.object({
  where: z.lazy(() => WorkspaceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkspaceUpdateWithoutFilesInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutFilesInputSchema) ]),
}).strict();

export default WorkspaceUpdateToOneWithWhereWithoutFilesInputSchema;
