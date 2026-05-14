import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerCreateInputSchema: z.ZodType<Prisma.CustomerCreateInput> = z.object({
  id: z.string(),
  stripeCustomerId: z.string().optional().nullable()
}).strict();

export default CustomerCreateInputSchema;
