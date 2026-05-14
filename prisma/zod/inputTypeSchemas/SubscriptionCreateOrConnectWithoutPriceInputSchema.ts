import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';
import { SubscriptionCreateWithoutPriceInputSchema } from './SubscriptionCreateWithoutPriceInputSchema';
import { SubscriptionUncheckedCreateWithoutPriceInputSchema } from './SubscriptionUncheckedCreateWithoutPriceInputSchema';

export const SubscriptionCreateOrConnectWithoutPriceInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutPriceInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPriceInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPriceInputSchema) ]),
}).strict();

export default SubscriptionCreateOrConnectWithoutPriceInputSchema;
