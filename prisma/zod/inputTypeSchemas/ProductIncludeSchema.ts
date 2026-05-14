import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PriceFindManyArgsSchema } from "../outputTypeSchemas/PriceFindManyArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  prices: z.union([z.boolean(),z.lazy(() => PriceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ProductIncludeSchema;
