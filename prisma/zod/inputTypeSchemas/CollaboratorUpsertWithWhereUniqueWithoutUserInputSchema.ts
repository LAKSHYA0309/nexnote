import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorUpdateWithoutUserInputSchema } from './CollaboratorUpdateWithoutUserInputSchema';
import { CollaboratorUncheckedUpdateWithoutUserInputSchema } from './CollaboratorUncheckedUpdateWithoutUserInputSchema';
import { CollaboratorCreateWithoutUserInputSchema } from './CollaboratorCreateWithoutUserInputSchema';
import { CollaboratorUncheckedCreateWithoutUserInputSchema } from './CollaboratorUncheckedCreateWithoutUserInputSchema';

export const CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CollaboratorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema;
