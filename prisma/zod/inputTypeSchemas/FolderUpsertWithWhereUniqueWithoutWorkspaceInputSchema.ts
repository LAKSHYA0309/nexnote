import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';
import { FolderUpdateWithoutWorkspaceInputSchema } from './FolderUpdateWithoutWorkspaceInputSchema';
import { FolderUncheckedUpdateWithoutWorkspaceInputSchema } from './FolderUncheckedUpdateWithoutWorkspaceInputSchema';
import { FolderCreateWithoutWorkspaceInputSchema } from './FolderCreateWithoutWorkspaceInputSchema';
import { FolderUncheckedCreateWithoutWorkspaceInputSchema } from './FolderUncheckedCreateWithoutWorkspaceInputSchema';

export const FolderUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.FolderUpsertWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FolderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FolderUpdateWithoutWorkspaceInputSchema),z.lazy(() => FolderUncheckedUpdateWithoutWorkspaceInputSchema) ]),
  create: z.union([ z.lazy(() => FolderCreateWithoutWorkspaceInputSchema),z.lazy(() => FolderUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default FolderUpsertWithWhereUniqueWithoutWorkspaceInputSchema;
