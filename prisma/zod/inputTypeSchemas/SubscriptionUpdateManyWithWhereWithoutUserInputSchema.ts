import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionScalarWhereInputSchema } from './SubscriptionScalarWhereInputSchema';
import { SubscriptionUpdateManyMutationInputSchema } from './SubscriptionUpdateManyMutationInputSchema';
import { SubscriptionUncheckedUpdateManyWithoutUserInputSchema } from './SubscriptionUncheckedUpdateManyWithoutUserInputSchema';

export const SubscriptionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SubscriptionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubscriptionUpdateManyMutationInputSchema),z.lazy(() => SubscriptionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default SubscriptionUpdateManyWithWhereWithoutUserInputSchema;
