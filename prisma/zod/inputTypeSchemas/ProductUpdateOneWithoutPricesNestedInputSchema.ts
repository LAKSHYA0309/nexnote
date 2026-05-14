import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateWithoutPricesInputSchema } from './ProductCreateWithoutPricesInputSchema';
import { ProductUncheckedCreateWithoutPricesInputSchema } from './ProductUncheckedCreateWithoutPricesInputSchema';
import { ProductCreateOrConnectWithoutPricesInputSchema } from './ProductCreateOrConnectWithoutPricesInputSchema';
import { ProductUpsertWithoutPricesInputSchema } from './ProductUpsertWithoutPricesInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutPricesInputSchema } from './ProductUpdateToOneWithWhereWithoutPricesInputSchema';
import { ProductUpdateWithoutPricesInputSchema } from './ProductUpdateWithoutPricesInputSchema';
import { ProductUncheckedUpdateWithoutPricesInputSchema } from './ProductUncheckedUpdateWithoutPricesInputSchema';

export const ProductUpdateOneWithoutPricesNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneWithoutPricesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutPricesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutPricesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutPricesInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutPricesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutPricesInputSchema),z.lazy(() => ProductUpdateWithoutPricesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutPricesInputSchema) ]).optional(),
}).strict();

export default ProductUpdateOneWithoutPricesNestedInputSchema;
