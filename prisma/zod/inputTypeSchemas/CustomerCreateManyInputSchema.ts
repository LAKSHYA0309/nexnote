import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerCreateManyInputSchema: z.ZodType<Prisma.CustomerCreateManyInput> = z.object({
  id: z.string(),
  stripeCustomerId: z.string().optional().nullable()
}).strict();

export default CustomerCreateManyInputSchema;
