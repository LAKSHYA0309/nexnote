import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerUncheckedCreateInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateInput> = z.object({
  id: z.string(),
  stripeCustomerId: z.string().optional().nullable()
}).strict();

export default CustomerUncheckedCreateInputSchema;
