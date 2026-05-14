import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';
import { SubscriptionUpdateWithoutUserInputSchema } from './SubscriptionUpdateWithoutUserInputSchema';
import { SubscriptionUncheckedUpdateWithoutUserInputSchema } from './SubscriptionUncheckedUpdateWithoutUserInputSchema';
import { SubscriptionCreateWithoutUserInputSchema } from './SubscriptionCreateWithoutUserInputSchema';
import { SubscriptionUncheckedCreateWithoutUserInputSchema } from './SubscriptionUncheckedCreateWithoutUserInputSchema';

export const SubscriptionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubscriptionUpdateWithoutUserInputSchema),z.lazy(() => SubscriptionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutUserInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default SubscriptionUpsertWithWhereUniqueWithoutUserInputSchema;
