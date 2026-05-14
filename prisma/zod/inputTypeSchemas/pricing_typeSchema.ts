import { z } from 'zod';

export const pricing_typeSchema = z.enum(['recurring','one_time']);

export type pricing_typeType = `${z.infer<typeof pricing_typeSchema>}`

export default pricing_typeSchema;
