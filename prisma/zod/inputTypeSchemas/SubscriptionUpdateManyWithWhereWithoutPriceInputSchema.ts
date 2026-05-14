import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionScalarWhereInputSchema } from './SubscriptionScalarWhereInputSchema';
import { SubscriptionUpdateManyMutationInputSchema } from './SubscriptionUpdateManyMutationInputSchema';
import { SubscriptionUncheckedUpdateManyWithoutPriceInputSchema } from './SubscriptionUncheckedUpdateManyWithoutPriceInputSchema';

export const SubscriptionUpdateManyWithWhereWithoutPriceInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutPriceInput> = z.object({
  where: z.lazy(() => SubscriptionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateManyMutationInputSchema),z.lazy(() => SubscriptionUncheckedUpdateManyWithoutPriceInputSchema) ]),
}).strict();

export default SubscriptionUpdateManyWithWhereWithoutPriceInputSchema;
