import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateWithoutFilesInputSchema } from './FolderCreateWithoutFilesInputSchema';
import { FolderUncheckedCreateWithoutFilesInputSchema } from './FolderUncheckedCreateWithoutFilesInputSchema';
import { FolderCreateOrConnectWithoutFilesInputSchema } from './FolderCreateOrConnectWithoutFilesInputSchema';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';

export const FolderCreateNestedOneWithoutFilesInputSchema: z.ZodType<Prisma.FolderCreateNestedOneWithoutFilesInput> = z.object({
  create: z.union([ z.lazy(() => FolderCreateWithoutFilesInputSchema),z.lazy(() => FolderUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FolderCreateOrConnectWithoutFilesInputSchema).optional(),
  connect: z.lazy(() => FolderWhereUniqueInputSchema).optional()
}).strict();

export default FolderCreateNestedOneWithoutFilesInputSchema;
