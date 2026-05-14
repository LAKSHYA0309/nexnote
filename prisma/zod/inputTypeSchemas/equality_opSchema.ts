import { z } from 'zod';

export const equality_opSchema = z.enum(['in_','gte','gt','lte','lt','neq','eq']);

export type equality_opType = `${z.infer<typeof equality_opSchema>}`

export default equality_opSchema;
