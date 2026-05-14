import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().uuid(),
  active: z.boolean().nullable(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  image: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
