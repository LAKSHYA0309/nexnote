import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUpdateWithoutFilesInputSchema } from './WorkspaceUpdateWithoutFilesInputSchema';
import { WorkspaceUncheckedUpdateWithoutFilesInputSchema } from './WorkspaceUncheckedUpdateWithoutFilesInputSchema';
import { WorkspaceCreateWithoutFilesInputSchema } from './WorkspaceCreateWithoutFilesInputSchema';
import { WorkspaceUncheckedCreateWithoutFilesInputSchema } from './WorkspaceUncheckedCreateWithoutFilesInputSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceUpsertWithoutFilesInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutFilesInput> = z.object({
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutFilesInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutFilesInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutFilesInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutFilesInputSchema) ]),
  where: z.lazy(() => WorkspaceWhereInputSchema).optional()
}).strict();

export default WorkspaceUpsertWithoutFilesInputSchema;
