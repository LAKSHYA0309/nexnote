import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';
import { SubscriptionUpdateWithoutPriceInputSchema } from './SubscriptionUpdateWithoutPriceInputSchema';
import { SubscriptionUncheckedUpdateWithoutPriceInputSchema } from './SubscriptionUncheckedUpdateWithoutPriceInputSchema';

export const SubscriptionUpdateWithWhereUniqueWithoutPriceInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutPriceInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateWithoutPriceInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutPriceInputSchema) ]),
}).strict();

export default SubscriptionUpdateWithWhereUniqueWithoutPriceInputSchema;
