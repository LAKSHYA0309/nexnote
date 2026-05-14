import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceSelectSchema } from '../inputTypeSchemas/PriceSelectSchema';
import { PriceIncludeSchema } from '../inputTypeSchemas/PriceIncludeSchema';

export const PriceArgsSchema: z.ZodType<Prisma.PriceDefaultArgs> = z.object({
  select: z.lazy(() => PriceSelectSchema).optional(),
  include: z.lazy(() => PriceIncludeSchema).optional(),
}).strict();

export default PriceArgsSchema;
