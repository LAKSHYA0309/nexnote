import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateWithoutFolderInputSchema } from './FileUpdateWithoutFolderInputSchema';
import { FileUncheckedUpdateWithoutFolderInputSchema } from './FileUncheckedUpdateWithoutFolderInputSchema';
import { FileCreateWithoutFolderInputSchema } from './FileCreateWithoutFolderInputSchema';
import { FileUncheckedCreateWithoutFolderInputSchema } from './FileUncheckedCreateWithoutFolderInputSchema';

export const FileUpsertWithWhereUniqueWithoutFolderInputSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutFolderInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FileUpdateWithoutFolderInputSchema),z.lazy(() => FileUncheckedUpdateWithoutFolderInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutFolderInputSchema),z.lazy(() => FileUncheckedCreateWithoutFolderInputSchema) ]),
}).strict();

export default FileUpsertWithWhereUniqueWithoutFolderInputSchema;
