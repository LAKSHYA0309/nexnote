import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderScalarWhereInputSchema } from './FolderScalarWhereInputSchema';
import { FolderUpdateManyMutationInputSchema } from './FolderUpdateManyMutationInputSchema';
import { FolderUncheckedUpdateManyWithoutWorkspaceInputSchema } from './FolderUncheckedUpdateManyWithoutWorkspaceInputSchema';

export const FolderUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.FolderUpdateManyWithWhereWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => FolderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FolderUpdateManyMutationInputSchema),z.lazy(() => FolderUncheckedUpdateManyWithoutWorkspaceInputSchema) ]),
}).strict();

export default FolderUpdateManyWithWhereWithoutWorkspaceInputSchema;
