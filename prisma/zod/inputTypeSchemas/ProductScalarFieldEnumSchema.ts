import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','active','name','description','image','metadata']);

export default ProductScalarFieldEnumSchema;
