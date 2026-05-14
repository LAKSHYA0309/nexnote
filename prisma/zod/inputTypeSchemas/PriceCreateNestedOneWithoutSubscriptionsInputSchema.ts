import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceCreateWithoutSubscriptionsInputSchema } from './PriceCreateWithoutSubscriptionsInputSchema';
import { PriceUncheckedCreateWithoutSubscriptionsInputSchema } from './PriceUncheckedCreateWithoutSubscriptionsInputSchema';
import { PriceCreateOrConnectWithoutSubscriptionsInputSchema } from './PriceCreateOrConnectWithoutSubscriptionsInputSchema';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';

export const PriceCreateNestedOneWithoutSubscriptionsInputSchema: z.ZodType<Prisma.PriceCreateNestedOneWithoutSubscriptionsInput> = z.object({
  create: z.union([ z.lazy(() => PriceCreateWithoutSubscriptionsInputSchema),z.lazy(() => PriceUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriceCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => PriceWhereUniqueInputSchema).optional()
}).strict();

export default PriceCreateNestedOneWithoutSubscriptionsInputSchema;
