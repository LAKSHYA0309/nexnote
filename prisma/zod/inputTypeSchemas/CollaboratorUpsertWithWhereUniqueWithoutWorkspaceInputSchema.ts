import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorUpdateWithoutWorkspaceInputSchema } from './CollaboratorUpdateWithoutWorkspaceInputSchema';
import { CollaboratorUncheckedUpdateWithoutWorkspaceInputSchema } from './CollaboratorUncheckedUpdateWithoutWorkspaceInputSchema';
import { CollaboratorCreateWithoutWorkspaceInputSchema } from './CollaboratorCreateWithoutWorkspaceInputSchema';
import { CollaboratorUncheckedCreateWithoutWorkspaceInputSchema } from './CollaboratorUncheckedCreateWithoutWorkspaceInputSchema';

export const CollaboratorUpsertWithWhereUniqueWithoutWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutWorkspaceInputSchema) ]),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutWorkspaceInputSchema) ]),
}).strict();

export default CollaboratorUpsertWithWhereUniqueWithoutWorkspaceInputSchema;
