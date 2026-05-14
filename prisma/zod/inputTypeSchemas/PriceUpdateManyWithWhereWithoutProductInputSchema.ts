import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceScalarWhereInputSchema } from './PriceScalarWhereInputSchema';
import { PriceUpdateManyMutationInputSchema } from './PriceUpdateManyMutationInputSchema';
import { PriceUncheckedUpdateManyWithoutProductInputSchema } from './PriceUncheckedUpdateManyWithoutProductInputSchema';

export const PriceUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.PriceUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => PriceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PriceUpdateManyMutationInputSchema),z.lazy(() => PriceUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export default PriceUpdateManyWithWhereWithoutProductInputSchema;
