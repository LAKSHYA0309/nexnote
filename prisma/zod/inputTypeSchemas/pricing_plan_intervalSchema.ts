import { z } from 'zod';

export const pricing_plan_intervalSchema = z.enum(['year','month','week','day']);

export type pricing_plan_intervalType = `${z.infer<typeof pricing_plan_intervalSchema>}`

export default pricing_plan_intervalSchema;
