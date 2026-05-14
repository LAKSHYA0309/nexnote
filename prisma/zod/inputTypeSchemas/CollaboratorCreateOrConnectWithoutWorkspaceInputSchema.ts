import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorCreateWithoutWorkspaceInputSchema } from './CollaboratorCreateWithoutWorkspaceInputSchema';
import { CollaboratorUncheckedCreateWithoutWorkspaceInputSchema } from './CollaboratorUncheckedCreateWithoutWorkspaceInputSchema';

export const CollaboratorCreateOrConnectWithoutWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default CollaboratorCreateOrConnectWithoutWorkspaceInputSchema;
