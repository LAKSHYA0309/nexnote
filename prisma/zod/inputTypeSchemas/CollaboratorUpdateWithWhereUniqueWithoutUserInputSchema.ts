import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorUpdateWithoutUserInputSchema } from './CollaboratorUpdateWithoutUserInputSchema';
import { CollaboratorUncheckedUpdateWithoutUserInputSchema } from './CollaboratorUncheckedUpdateWithoutUserInputSchema';

export const CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CollaboratorUpdateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema;
