import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';
import { FolderUpdateWithoutWorkspaceInputSchema } from './FolderUpdateWithoutWorkspaceInputSchema';
import { FolderUncheckedUpdateWithoutWorkspaceInputSchema } from './FolderUncheckedUpdateWithoutWorkspaceInputSchema';

export const FolderUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.FolderUpdateWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FolderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FolderUpdateWithoutWorkspaceInputSchema),z.lazy(() => FolderUncheckedUpdateWithoutWorkspaceInputSchema) ]),
}).strict();

export default FolderUpdateWithWhereUniqueWithoutWorkspaceInputSchema;
