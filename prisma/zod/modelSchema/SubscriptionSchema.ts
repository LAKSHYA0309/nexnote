import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { subscription_statusSchema } from '../inputTypeSchemas/subscription_statusSchema'

/////////////////////////////////////////
// SUBSCRIPTION SCHEMA
/////////////////////////////////////////

export const SubscriptionSchema = z.object({
  status: subscription_statusSchema.nullable(),
  id: z.string().uuid(),
  userId: z.string(),
  metadata: JsonValueSchema.nullable(),
  priceId: z.string().nullable(),
  quantity: z.number().int().nullable(),
  cancelAtPeriodEnd: z.boolean().nullable(),
  created: z.coerce.date(),
  currentPeriodStart: z.coerce.date(),
  currentPeriodEnd: z.coerce.date(),
  endedAt: z.coerce.date().nullable(),
  cancelAt: z.coerce.date().nullable(),
  canceledAt: z.coerce.date().nullable(),
  trialStart: z.coerce.date().nullable(),
  trialEnd: z.coerce.date().nullable(),
})

export type Subscription = z.infer<typeof SubscriptionSchema>

export default SubscriptionSchema;
