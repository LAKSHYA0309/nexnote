import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorUpdateWithoutWorkspaceInputSchema } from './CollaboratorUpdateWithoutWorkspaceInputSchema';
import { CollaboratorUncheckedUpdateWithoutWorkspaceInputSchema } from './CollaboratorUncheckedUpdateWithoutWorkspaceInputSchema';

export const CollaboratorUpdateWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutWorkspaceInputSchema) ]),
}).strict();

export default CollaboratorUpdateWithWhereUniqueWithoutWorkspaceInputSchema;
