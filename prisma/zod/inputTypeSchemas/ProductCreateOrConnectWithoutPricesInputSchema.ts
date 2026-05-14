import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutPricesInputSchema } from './ProductCreateWithoutPricesInputSchema';
import { ProductUncheckedCreateWithoutPricesInputSchema } from './ProductUncheckedCreateWithoutPricesInputSchema';

export const ProductCreateOrConnectWithoutPricesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutPricesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutPricesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutPricesInputSchema) ]),
}).strict();

export default ProductCreateOrConnectWithoutPricesInputSchema;
