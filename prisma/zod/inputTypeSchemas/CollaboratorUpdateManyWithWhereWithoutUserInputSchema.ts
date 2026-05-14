import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorScalarWhereInputSchema } from './CollaboratorScalarWhereInputSchema';
import { CollaboratorUpdateManyMutationInputSchema } from './CollaboratorUpdateManyMutationInputSchema';
import { CollaboratorUncheckedUpdateManyWithoutUserInputSchema } from './CollaboratorUncheckedUpdateManyWithoutUserInputSchema';

export const CollaboratorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateManyMutationInputSchema),z.lazy(() => CollaboratorUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default CollaboratorUpdateManyWithWhereWithoutUserInputSchema;
