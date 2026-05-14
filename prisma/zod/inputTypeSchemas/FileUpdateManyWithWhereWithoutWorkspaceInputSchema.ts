import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileScalarWhereInputSchema } from './FileScalarWhereInputSchema';
import { FileUpdateManyMutationInputSchema } from './FileUpdateManyMutationInputSchema';
import { FileUncheckedUpdateManyWithoutWorkspaceInputSchema } from './FileUncheckedUpdateManyWithoutWorkspaceInputSchema';

export const FileUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.FileUpdateManyWithWhereWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FileScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FileUpdateManyMutationInputSchema),z.lazy(() => FileUncheckedUpdateManyWithoutWorkspaceInputSchema) ]),
}).strict();

export default FileUpdateManyWithWhereWithoutWorkspaceInputSchema;
