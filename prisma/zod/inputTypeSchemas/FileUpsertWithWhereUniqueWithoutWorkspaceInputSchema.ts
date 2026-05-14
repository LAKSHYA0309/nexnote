import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateWithoutWorkspaceInputSchema } from './FileUpdateWithoutWorkspaceInputSchema';
import { FileUncheckedUpdateWithoutWorkspaceInputSchema } from './FileUncheckedUpdateWithoutWorkspaceInputSchema';
import { FileCreateWithoutWorkspaceInputSchema } from './FileCreateWithoutWorkspaceInputSchema';
import { FileUncheckedCreateWithoutWorkspaceInputSchema } from './FileUncheckedCreateWithoutWorkspaceInputSchema';

export const FileUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.FileUpsertWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FileUpdateWithoutWorkspaceInputSchema),z.lazy(() => FileUncheckedUpdateWithoutWorkspaceInputSchema) ]),
  create: z.union([ z.lazy(() => FileCreateWithoutWorkspaceInputSchema),z.lazy(() => FileUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default FileUpsertWithWhereUniqueWithoutWorkspaceInputSchema;
