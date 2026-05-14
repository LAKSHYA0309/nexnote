import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionCreateWithoutPriceInputSchema } from './SubscriptionCreateWithoutPriceInputSchema';
import { SubscriptionUncheckedCreateWithoutPriceInputSchema } from './SubscriptionUncheckedCreateWithoutPriceInputSchema';
import { SubscriptionCreateOrConnectWithoutPriceInputSchema } from './SubscriptionCreateOrConnectWithoutPriceInputSchema';
import { SubscriptionCreateManyPriceInputEnvelopeSchema } from './SubscriptionCreateManyPriceInputEnvelopeSchema';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';

export const SubscriptionCreateNestedManyWithoutPriceInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutPriceInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPriceInputSchema),z.lazy(() => SubscriptionCreateWithoutPriceInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutPriceInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPriceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutPriceInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutPriceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyPriceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubscriptionCreateNestedManyWithoutPriceInputSchema;
