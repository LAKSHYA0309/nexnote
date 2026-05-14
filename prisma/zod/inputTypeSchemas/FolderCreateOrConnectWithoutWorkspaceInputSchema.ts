import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';
import { FolderCreateWithoutWorkspaceInputSchema } from './FolderCreateWithoutWorkspaceInputSchema';
import { FolderUncheckedCreateWithoutWorkspaceInputSchema } from './FolderUncheckedCreateWithoutWorkspaceInputSchema';

export const FolderCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.FolderCreateOrConnectWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FolderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FolderCreateWithoutWorkspaceInputSchema),z.lazy(() => FolderUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default FolderCreateOrConnectWithoutWorkspaceInputSchema;
