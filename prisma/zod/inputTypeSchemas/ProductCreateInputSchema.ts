import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { PriceCreateNestedManyWithoutProductInputSchema } from './PriceCreateNestedManyWithoutProductInputSchema';

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().uuid().optional(),
  active: z.boolean().optional().nullable(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  prices: z.lazy(() => PriceCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export default ProductCreateInputSchema;
