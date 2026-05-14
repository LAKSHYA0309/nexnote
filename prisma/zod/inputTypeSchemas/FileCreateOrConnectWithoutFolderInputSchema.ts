import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileCreateWithoutFolderInputSchema } from './FileCreateWithoutFolderInputSchema';
import { FileUncheckedCreateWithoutFolderInputSchema } from './FileUncheckedCreateWithoutFolderInputSchema';

export const FileCreateOrConnectWithoutFolderInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutFolderInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutFolderInputSchema),z.lazy(() => FileUncheckedCreateWithoutFolderInputSchema) ]),
}).strict();

export default FileCreateOrConnectWithoutFolderInputSchema;
