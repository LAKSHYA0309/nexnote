import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { pricing_typeSchema } from '../inputTypeSchemas/pricing_typeSchema'
import { pricing_plan_intervalSchema } from '../inputTypeSchemas/pricing_plan_intervalSchema'

/////////////////////////////////////////
// PRICE SCHEMA
/////////////////////////////////////////

export const PriceSchema = z.object({
  type: pricing_typeSchema.nullable(),
  interval: pricing_plan_intervalSchema.nullable(),
  id: z.string().uuid(),
  productId: z.string().nullable(),
  active: z.boolean().nullable(),
  description: z.string().nullable(),
  unitAmount: z.bigint().nullable(),
  currency: z.string().nullable(),
  intervalCount: z.number().int().nullable(),
  trialPeriodDays: z.number().int().nullable(),
  metadata: JsonValueSchema.nullable(),
})

export type Price = z.infer<typeof PriceSchema>

export default PriceSchema;
