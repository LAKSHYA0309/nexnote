import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorScalarWhereInputSchema } from './CollaboratorScalarWhereInputSchema';
import { CollaboratorUpdateManyMutationInputSchema } from './CollaboratorUpdateManyMutationInputSchema';
import { CollaboratorUncheckedUpdateManyWithoutWorkspaceInputSchema } from './CollaboratorUncheckedUpdateManyWithoutWorkspaceInputSchema';

export const CollaboratorUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => CollaboratorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateManyMutationInputSchema),z.lazy(() => CollaboratorUncheckedUpdateManyWithoutWorkspaceInputSchema) ]),
}).strict();

export default CollaboratorUpdateManyWithWhereWithoutWorkspaceInputSchema;
