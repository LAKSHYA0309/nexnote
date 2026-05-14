import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';
import { PriceCreateWithoutProductInputSchema } from './PriceCreateWithoutProductInputSchema';
import { PriceUncheckedCreateWithoutProductInputSchema } from './PriceUncheckedCreateWithoutProductInputSchema';

export const PriceCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.PriceCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => PriceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriceCreateWithoutProductInputSchema),z.lazy(() => PriceUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default PriceCreateOrConnectWithoutProductInputSchema;
