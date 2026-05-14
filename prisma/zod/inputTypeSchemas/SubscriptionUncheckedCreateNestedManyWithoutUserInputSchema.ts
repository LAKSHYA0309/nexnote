import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionCreateWithoutUserInputSchema } from './SubscriptionCreateWithoutUserInputSchema';
import { SubscriptionUncheckedCreateWithoutUserInputSchema } from './SubscriptionUncheckedCreateWithoutUserInputSchema';
import { SubscriptionCreateOrConnectWithoutUserInputSchema } from './SubscriptionCreateOrConnectWithoutUserInputSchema';
import { SubscriptionCreateManyUserInputEnvelopeSchema } from './SubscriptionCreateManyUserInputEnvelopeSchema';
import { SubscriptionWhereUniqueInputSchema } from './SubscriptionWhereUniqueInputSchema';

export const SubscriptionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SubscriptionCreateWithoutUserInputSchema),z.lazy(() => SubscriptionCreateWithoutUserInputSchema).array(),z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubscriptionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SubscriptionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubscriptionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubscriptionWhereUniqueInputSchema),z.lazy(() => SubscriptionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubscriptionUncheckedCreateNestedManyWithoutUserInputSchema;
