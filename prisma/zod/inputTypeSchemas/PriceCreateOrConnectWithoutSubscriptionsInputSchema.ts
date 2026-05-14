import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';
import { PriceCreateWithoutSubscriptionsInputSchema } from './PriceCreateWithoutSubscriptionsInputSchema';
import { PriceUncheckedCreateWithoutSubscriptionsInputSchema } from './PriceUncheckedCreateWithoutSubscriptionsInputSchema';

export const PriceCreateOrConnectWithoutSubscriptionsInputSchema: z.ZodType<Prisma.PriceCreateOrConnectWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => PriceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriceCreateWithoutSubscriptionsInputSchema),z.lazy(() => PriceUncheckedCreateWithoutSubscriptionsInputSchema) ]),
}).strict();

export default PriceCreateOrConnectWithoutSubscriptionsInputSchema;
