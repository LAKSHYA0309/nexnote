import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';
import { PriceUpdateWithoutProductInputSchema } from './PriceUpdateWithoutProductInputSchema';
import { PriceUncheckedUpdateWithoutProductInputSchema } from './PriceUncheckedUpdateWithoutProductInputSchema';

export const PriceUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.PriceUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => PriceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PriceUpdateWithoutProductInputSchema),z.lazy(() => PriceUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export default PriceUpdateWithWhereUniqueWithoutProductInputSchema;
