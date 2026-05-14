import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateWithoutWorkspaceInputSchema } from './FileUpdateWithoutWorkspaceInputSchema';
import { FileUncheckedUpdateWithoutWorkspaceInputSchema } from './FileUncheckedUpdateWithoutWorkspaceInputSchema';

export const FileUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.FileUpdateWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FileUpdateWithoutWorkspaceInputSchema),z.lazy(() => FileUncheckedUpdateWithoutWorkspaceInputSchema) ]),
}).strict();

export default FileUpdateWithWhereUniqueWithoutWorkspaceInputSchema;
