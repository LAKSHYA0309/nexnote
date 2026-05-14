import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const CustomerWhereUniqueInputSchema: z.ZodType<Prisma.CustomerWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CustomerWhereInputSchema),z.lazy(() => CustomerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CustomerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CustomerWhereInputSchema),z.lazy(() => CustomerWhereInputSchema).array() ]).optional(),
  stripeCustomerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export default CustomerWhereUniqueInputSchema;
