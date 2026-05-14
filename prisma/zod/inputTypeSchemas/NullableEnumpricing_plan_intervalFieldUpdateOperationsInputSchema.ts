import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';

export const NullableEnumpricing_plan_intervalFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumpricing_plan_intervalFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => pricing_plan_intervalSchema).optional().nullable()
}).strict();

export default NullableEnumpricing_plan_intervalFieldUpdateOperationsInputSchema;
