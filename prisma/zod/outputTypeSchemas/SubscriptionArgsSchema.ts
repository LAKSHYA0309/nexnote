import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SubscriptionSelectSchema } from '../inputTypeSchemas/SubscriptionSelectSchema';
import { SubscriptionIncludeSchema } from '../inputTypeSchemas/SubscriptionIncludeSchema';

export const SubscriptionArgsSchema: z.ZodType<Prisma.SubscriptionDefaultArgs> = z.object({
  select: z.lazy(() => SubscriptionSelectSchema).optional(),
  include: z.lazy(() => SubscriptionIncludeSchema).optional(),
}).strict();

export default SubscriptionArgsSchema;
