import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';
import { FolderCreateWithoutFilesInputSchema } from './FolderCreateWithoutFilesInputSchema';
import { FolderUncheckedCreateWithoutFilesInputSchema } from './FolderUncheckedCreateWithoutFilesInputSchema';

export const FolderCreateOrConnectWithoutFilesInputSchema: z.ZodType<Prisma.FolderCreateOrConnectWithoutFilesInput> = z.object({
  where: z.lazy(() => FolderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FolderCreateWithoutFilesInputSchema),z.lazy(() => FolderUncheckedCreateWithoutFilesInputSchema) ]),
}).strict();

export default FolderCreateOrConnectWithoutFilesInputSchema;
