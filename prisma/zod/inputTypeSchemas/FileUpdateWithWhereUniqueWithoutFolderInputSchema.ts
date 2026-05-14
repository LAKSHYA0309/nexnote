import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateWithoutFolderInputSchema } from './FileUpdateWithoutFolderInputSchema';
import { FileUncheckedUpdateWithoutFolderInputSchema } from './FileUncheckedUpdateWithoutFolderInputSchema';

export const FileUpdateWithWhereUniqueWithoutFolderInputSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutFolderInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FileUpdateWithoutFolderInputSchema),z.lazy(() => FileUncheckedUpdateWithoutFolderInputSchema) ]),
}).strict();

export default FileUpdateWithWhereUniqueWithoutFolderInputSchema;
