import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceCreateManyProductInputSchema } from './PriceCreateManyProductInputSchema';

export const PriceCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.PriceCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PriceCreateManyProductInputSchema),z.lazy(() => PriceCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PriceCreateManyProductInputEnvelopeSchema;
