import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionCreateWithoutUserInputSchema } from './SubscriptionCreateWithoutUserInputSchema';
import { SubscriptionUncheckedCreateWithoutUserInputSchema } from './SubscriptionUncheckedCreateWithoutUserInputSchema';
import { SubscriptionCreateOrConnectWithoutUserInputSchema } from './SubscriptionCreateOrConnectWithoutUserInputSchema';
import { SubscriptionUpsertWithWhereUniqueWithoutUserInputSchema } from './SubscriptionUpsertWithWhereUniqueWithoutUserInputSchema';
import { SubscriptionCreateManyUserInputEnvelopeSchema } from './SubscriptionCreateManyUserInputEnvelopeSchema';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';
import { SubscriptionUpdateWithWhereUniqueWithoutUserInputSchema } from './SubscriptionUpdateWithWhereUniqueWithoutUserInputSchema';
import { SubscriptionUpdateManyWithWhereWithoutUserInputSchema } from './SubscriptionUpdateManyWithWhereWithoutUserInputSchema';
import { SubscriptionScalarWhereInputSchema } from './SubscriptionScalarWhereInputSchema';

export const SubscriptionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutUserInputSchema),z.lazy(() => SubscriptionCreateWithoutUserInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SubscriptionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubscriptionUpdateManyWithoutUserNestedInputSchema;
