import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubscriptionWhereInputSchema } from './SubscriptionWhereInputSchema';

export const SubscriptionListRelationFilterSchema: z.ZodType<Prisma.SubscriptionListRelationFilter> = z.object({
  every: z.lazy(() => SubscriptionWhereInputSchema).optional(),
  some: z.lazy(() => SubscriptionWhereInputSchema).optional(),
  none: z.lazy(() => SubscriptionWhereInputSchema).optional()
}).strict();

export default SubscriptionListRelationFilterSchema;
