import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorCreateWithoutUserInputSchema } from './CollaboratorCreateWithoutUserInputSchema';
import { CollaboratorUncheckedCreateWithoutUserInputSchema } from './CollaboratorUncheckedCreateWithoutUserInputSchema';

export const CollaboratorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default CollaboratorCreateOrConnectWithoutUserInputSchema;
