import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';
import { SubscriptionUpdateWithoutPriceInputSchema } from './SubscriptionUpdateWithoutPriceInputSchema';
import { SubscriptionUncheckedUpdateWithoutPriceInputSchema } from './SubscriptionUncheckedUpdateWithoutPriceInputSchema';
import { SubscriptionCreateWithoutPriceInputSchema } from './SubscriptionCreateWithoutPriceInputSchema';
import { SubscriptionUncheckedCreateWithoutPriceInputSchema } from './SubscriptionUncheckedCreateWithoutPriceInputSchema';

export const SubscriptionUpsertWithWhereUniqueWithoutPriceInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutPriceInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithoutPriceInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutPriceInputSchema) ]),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutPriceInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutPriceInputSchema) ]),
}).strict();

export default SubscriptionUpsertWithWhereUniqueWithoutPriceInputSchema;
