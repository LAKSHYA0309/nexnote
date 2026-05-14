import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorCreateWithoutUserInputSchema } from './CollaboratorCreateWithoutUserInputSchema';
import { CollaboratorUncheckedCreateWithoutUserInputSchema } from './CollaboratorUncheckedCreateWithoutUserInputSchema';
import { CollaboratorCreateOrConnectWithoutUserInputSchema } from './CollaboratorCreateOrConnectWithoutUserInputSchema';
import { CollaboratorCreateManyUserInputEnvelopeSchema } from './CollaboratorCreateManyUserInputEnvelopeSchema';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';

export const CollaboratorCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CollaboratorCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorCreateWithoutUserInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CollaboratorCreateNestedManyWithoutUserInputSchema;
