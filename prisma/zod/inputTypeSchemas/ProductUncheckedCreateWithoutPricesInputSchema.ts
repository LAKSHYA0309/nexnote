import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const ProductUncheckedCreateWithoutPricesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutPricesInput> = z.object({
  id: z.string().uuid().optional(),
  active: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
}).strict();

export default ProductUncheckedCreateWithoutPricesInputSchema;
