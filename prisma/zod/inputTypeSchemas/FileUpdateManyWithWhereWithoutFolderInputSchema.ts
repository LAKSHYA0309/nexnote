import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileScalarWhereInputSchema } from './FileScalarWhereInputSchema';
import { FileUpdateManyMutationInputSchema } from './FileUpdateManyMutationInputSchema';
import { FileUncheckedUpdateManyWithoutFolderInputSchema } from './FileUncheckedUpdateManyWithoutFolderInputSchema';

export const FileUpdateManyWithWhereWithoutFolderInputSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutFolderInput> = z.object({
  where: z.lazy(() => FileScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FileUpdateManyMutationInputSchema),z.lazy(() => FileUncheckedUpdateManyWithoutFolderInputSchema) ]),
}).strict();

export default FileUpdateManyWithWhereWithoutFolderInputSchema;
