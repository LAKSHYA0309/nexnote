import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CustomerSelectSchema: z.ZodType<Prisma.CustomerSelect> = z.object({
  id: z.boolean().optional(),
  stripeCustomerId: z.boolean().optional(),
}).strict()

export default CustomerSelectSchema;
