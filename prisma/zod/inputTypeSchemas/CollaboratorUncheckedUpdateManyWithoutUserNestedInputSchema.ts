import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorCreateWithoutUserInputSchema } from './CollaboratorCreateWithoutUserInputSchema';
import { CollaboratorUncheckedCreateWithoutUserInputSchema } from './CollaboratorUncheckedCreateWithoutUserInputSchema';
import { CollaboratorCreateOrConnectWithoutUserInputSchema } from './CollaboratorCreateOrConnectWithoutUserInputSchema';
import { CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema } from './CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema';
import { CollaboratorCreateManyUserInputEnvelopeSchema } from './CollaboratorCreateManyUserInputEnvelopeSchema';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema } from './CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema';
import { CollaboratorUpdateManyWithWhereWithoutUserInputSchema } from './CollaboratorUpdateManyWithWhereWithoutUserInputSchema';
import { CollaboratorScalarWhereInputSchema } from './CollaboratorScalarWhereInputSchema';

export const CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutUserInputSchema),z.lazy(() => CollaboratorCreateWithoutUserInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CollaboratorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CollaboratorUncheckedUpdateManyWithoutUserNestedInputSchema;
