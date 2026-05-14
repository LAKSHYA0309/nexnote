import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderUpdateWithoutFilesInputSchema } from './FolderUpdateWithoutFilesInputSchema';
import { FolderUncheckedUpdateWithoutFilesInputSchema } from './FolderUncheckedUpdateWithoutFilesInputSchema';
import { FolderCreateWithoutFilesInputSchema } from './FolderCreateWithoutFilesInputSchema';
import { FolderUncheckedCreateWithoutFilesInputSchema } from './FolderUncheckedCreateWithoutFilesInputSchema';
import { FolderWhereInputSchema } from './FolderWhereInputSchema';

export const FolderUpsertWithoutFilesInputSchema: z.ZodType<Prisma.FolderUpsertWithoutFilesInput> = z.object({
  update: z.union([ z.lazy(() => FolderUpdateWithoutFilesInputSchema),z.lazy(() => FolderUncheckedUpdateWithoutFilesInputSchema) ]),
  create: z.union([ z.lazy(() => FolderCreateWithoutFilesInputSchema),z.lazy(() => FolderUncheckedCreateWithoutFilesInputSchema) ]),
  where: z.lazy(() => FolderWhereInputSchema).optional()
}).strict();

export default FolderUpsertWithoutFilesInputSchema;
