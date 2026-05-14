import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';
import { PriceUpdateWithoutProductInputSchema } from './PriceUpdateWithoutProductInputSchema';
import { PriceUncheckedUpdateWithoutProductInputSchema } from './PriceUncheckedUpdateWithoutProductInputSchema';
import { PriceCreateWithoutProductInputSchema } from './PriceCreateWithoutProductInputSchema';
import { PriceUncheckedCreateWithoutProductInputSchema } from './PriceUncheckedCreateWithoutProductInputSchema';

export const PriceUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.PriceUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => PriceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PriceUpdateWithoutProductInputSchema),z.lazy(() => PriceUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => PriceCreateWithoutProductInputSchema),z.lazy(() => PriceUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default PriceUpsertWithWhereUniqueWithoutProductInputSchema;
