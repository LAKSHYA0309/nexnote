import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { pricing_typeSchema } from './pricing_typeSchema';

export const NullableEnumpricing_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumpricing_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => pricing_typeSchema).optional().nullable()
}).strict();

export default NullableEnumpricing_typeFieldUpdateOperationsInputSchema;
