import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutPricesInputSchema } from './ProductUpdateWithoutPricesInputSchema';
import { ProductUncheckedUpdateWithoutPricesInputSchema } from './ProductUncheckedUpdateWithoutPricesInputSchema';

export const ProductUpdateToOneWithWhereWithoutPricesInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutPricesInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutPricesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutPricesInputSchema) ]),
}).strict();

export default ProductUpdateToOneWithWhereWithoutPricesInputSchema;
