import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionCreateWithoutPriceInputSchema } from './SubscriptionCreateWithoutPriceInputSchema';
import { SubscriptionUncheckedCreateWithoutPriceInputSchema } from './SubscriptionUncheckedCreateWithoutPriceInputSchema';
import { SubscriptionCreateOrConnectWithoutPriceInputSchema } from './SubscriptionCreateOrConnectWithoutPriceInputSchema';
import { SubscriptionUpsertWithWhereUniqueWithoutPriceInputSchema } from './SubscriptionUpsertWithWhereUniqueWithoutPriceInputSchema';
import { SubscriptionCreateManyPriceInputEnvelopeSchema } from './SubscriptionCreateManyPriceInputEnvelopeSchema';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';
import { SubscriptionUpdateWithWhereUniqueWithoutPriceInputSchema } from './SubscriptionUpdateWithWhereUniqueWithoutPriceInputSchema';
import { SubscriptionUpdateManyWithWhereWithoutPriceInputSchema } from './SubscriptionUpdateManyWithWhereWithoutPriceInputSchema';
import { SubscriptionScalarWhereInputSchema } from './SubscriptionScalarWhereInputSchema';

export const SubscriptionUncheckedUpdateManyWithoutPriceNestedInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutPriceNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPriceInputSchema),z.lazy(() => SubscriptionCreateWithoutPriceInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutPriceInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPriceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutPriceInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutPriceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutPriceInputSchema),z.lazy(() => SubscriptionUpsertWithWhereUniqueWithoutPriceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyPriceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutPriceInputSchema),z.lazy(() => SubscriptionUpdateWithWhereUniqueWithoutPriceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubscriptionUpdateManyWithWhereWithoutPriceInputSchema),z.lazy(() => SubscriptionUpdateManyWithWhereWithoutPriceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubscriptionScalarWhereInputSchema),z.lazy(() => SubscriptionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubscriptionUncheckedUpdateManyWithoutPriceNestedInputSchema;
