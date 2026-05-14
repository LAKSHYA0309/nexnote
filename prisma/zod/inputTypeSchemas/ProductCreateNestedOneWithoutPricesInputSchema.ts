import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateWithoutPricesInputSchema } from './ProductCreateWithoutPricesInputSchema';
import { ProductUncheckedCreateWithoutPricesInputSchema } from './ProductUncheckedCreateWithoutPricesInputSchema';
import { ProductCreateOrConnectWithoutPricesInputSchema } from './ProductCreateOrConnectWithoutPricesInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';

export const ProductCreateNestedOneWithoutPricesInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutPricesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutPricesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutPricesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutPricesInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export default ProductCreateNestedOneWithoutPricesInputSchema;
