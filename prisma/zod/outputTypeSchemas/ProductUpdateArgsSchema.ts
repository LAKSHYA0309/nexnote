import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductIncludeSchema } from '../inputTypeSchemas/ProductIncludeSchema'
import { ProductUpdateInputSchema } from '../inputTypeSchemas/ProductUpdateInputSchema'
import { ProductUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProductUncheckedUpdateInputSchema'
import { ProductWhereUniqueInputSchema } from '../inputTypeSchemas/ProductWhereUniqueInputSchema'
import { PriceFindManyArgsSchema } from "../outputTypeSchemas/PriceFindManyArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  active: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  image: z.boolean().optional(),
  metadata: z.boolean().optional(),
  prices: z.union([z.boolean(),z.lazy(() => PriceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export default ProductUpdateArgsSchema;
