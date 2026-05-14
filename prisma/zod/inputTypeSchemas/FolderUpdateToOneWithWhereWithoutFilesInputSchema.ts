import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderWhereInputSchema } from './FolderWhereInputSchema';
import { FolderUpdateWithoutFilesInputSchema } from './FolderUpdateWithoutFilesInputSchema';
import { FolderUncheckedUpdateWithoutFilesInputSchema } from './FolderUncheckedUpdateWithoutFilesInputSchema';

export const FolderUpdateToOneWithWhereWithoutFilesInputSchema: z.ZodType<Prisma.FolderUpdateToOneWithWhereWithoutFilesInput> = z.object({
  where: z.lazy(() => FolderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => FolderUpdateWithoutFilesInputSchema),z.lazy(() => FolderUncheckedUpdateWithoutFilesInputSchema) ]),
}).strict();

export default FolderUpdateToOneWithWhereWithoutFilesInputSchema;
