import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceUpdateWithoutSubscriptionsInputSchema } from './PriceUpdateWithoutSubscriptionsInputSchema';
import { PriceUncheckedUpdateWithoutSubscriptionsInputSchema } from './PriceUncheckedUpdateWithoutSubscriptionsInputSchema';
import { PriceCreateWithoutSubscriptionsInputSchema } from './PriceCreateWithoutSubscriptionsInputSchema';
import { PriceUncheckedCreateWithoutSubscriptionsInputSchema } from './PriceUncheckedCreateWithoutSubscriptionsInputSchema';
import { PriceWhereInputSchema } from './PriceWhereInputSchema';

export const PriceUpsertWithoutSubscriptionsInputSchema: z.ZodType<Prisma.PriceUpsertWithoutSubscriptionsInput> = z.object({
  update: z.union([ z.lazy(() => PriceUpdateWithoutSubscriptionsInputSchema),z.lazy(() => PriceUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
  create: z.union([ z.lazy(() => PriceCreateWithoutSubscriptionsInputSchema),z.lazy(() => PriceUncheckedCreateWithoutSubscriptionsInputSchema) ]),
  where: z.lazy(() => PriceWhereInputSchema).optional()
}).strict();

export default PriceUpsertWithoutSubscriptionsInputSchema;
