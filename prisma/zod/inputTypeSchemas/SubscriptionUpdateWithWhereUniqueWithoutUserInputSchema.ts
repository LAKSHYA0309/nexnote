import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';
import { SubscriptionUpdateWithoutUserInputSchema } from './SubscriptionUpdateWithoutUserInputSchema';
import { SubscriptionUncheckedUpdateWithoutUserInputSchema } from './SubscriptionUncheckedUpdateWithoutUserInputSchema';

export const SubscriptionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateWithoutUserInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default SubscriptionUpdateWithWhereUniqueWithoutUserInputSchema;
