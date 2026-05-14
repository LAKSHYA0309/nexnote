import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionCreateManyUserInputSchema } from './SubscriptionCreateManyUserInputSchema';

export const SubscriptionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SubscriptionCreateManyUserInputSchema),z.lazy(() => SubscriptionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SubscriptionCreateManyUserInputEnvelopeSchema;
