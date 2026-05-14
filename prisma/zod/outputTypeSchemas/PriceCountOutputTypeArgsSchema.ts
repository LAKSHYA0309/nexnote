import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceCountOutputTypeSelectSchema } from './PriceCountOutputTypeSelectSchema';

export const PriceCountOutputTypeArgsSchema: z.ZodType<Prisma.PriceCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PriceCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PriceCountOutputTypeSelectSchema;
