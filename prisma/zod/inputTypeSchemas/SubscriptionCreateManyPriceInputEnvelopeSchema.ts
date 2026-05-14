import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionCreateManyPriceInputSchema } from './SubscriptionCreateManyPriceInputSchema';

export const SubscriptionCreateManyPriceInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionCreateManyPriceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubscriptionCreateManyPriceInputSchema),z.lazy(() => SubscriptionCreateManyPriceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SubscriptionCreateManyPriceInputEnvelopeSchema;
