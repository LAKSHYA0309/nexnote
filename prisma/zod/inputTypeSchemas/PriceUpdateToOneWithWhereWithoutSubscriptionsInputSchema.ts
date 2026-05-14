import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereInputSchema } from './PriceWhereInputSchema';
import { PriceUpdateWithoutSubscriptionsInputSchema } from './PriceUpdateWithoutSubscriptionsInputSchema';
import { PriceUncheckedUpdateWithoutSubscriptionsInputSchema } from './PriceUncheckedUpdateWithoutSubscriptionsInputSchema';

export const PriceUpdateToOneWithWhereWithoutSubscriptionsInputSchema: z.ZodType<Prisma.PriceUpdateToOneWithWhereWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => PriceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PriceUpdateWithoutSubscriptionsInputSchema),z.lazy(() => PriceUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
}).strict();

export default PriceUpdateToOneWithWhereWithoutSubscriptionsInputSchema;
