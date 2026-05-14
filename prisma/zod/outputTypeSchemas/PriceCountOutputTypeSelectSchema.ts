import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PriceCountOutputTypeSelectSchema: z.ZodType<Prisma.PriceCountOutputTypeSelect> = z.object({
  subscriptions: z.boolean().optional(),
}).strict();

export default PriceCountOutputTypeSelectSchema;
