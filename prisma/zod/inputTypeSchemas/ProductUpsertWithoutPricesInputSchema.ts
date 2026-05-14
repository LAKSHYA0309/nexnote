import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductUpdateWithoutPricesInputSchema } from './ProductUpdateWithoutPricesInputSchema';
import { ProductUncheckedUpdateWithoutPricesInputSchema } from './ProductUncheckedUpdateWithoutPricesInputSchema';
import { ProductCreateWithoutPricesInputSchema } from './ProductCreateWithoutPricesInputSchema';
import { ProductUncheckedCreateWithoutPricesInputSchema } from './ProductUncheckedCreateWithoutPricesInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductUpsertWithoutPricesInputSchema: z.ZodType<Prisma.ProductUpsertWithoutPricesInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutPricesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutPricesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutPricesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutPricesInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export default ProductUpsertWithoutPricesInputSchema;
