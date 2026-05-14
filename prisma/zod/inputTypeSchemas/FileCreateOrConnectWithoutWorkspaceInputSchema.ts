import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileCreateWithoutWorkspaceInputSchema } from './FileCreateWithoutWorkspaceInputSchema';
import { FileUncheckedCreateWithoutWorkspaceInputSchema } from './FileUncheckedCreateWithoutWorkspaceInputSchema';

export const FileCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.FileCreateOrConnectWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FileCreateWithoutWorkspaceInputSchema),z.lazy(() => FileUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default FileCreateOrConnectWithoutWorkspaceInputSchema;
