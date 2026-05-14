import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { subscription_statusSchema } from './subscription_statusSchema';

export const NullableEnumsubscription_statusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumsubscription_statusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => subscription_statusSchema).optional().nullable()
}).strict();

export default NullableEnumsubscription_statusFieldUpdateOperationsInputSchema;
