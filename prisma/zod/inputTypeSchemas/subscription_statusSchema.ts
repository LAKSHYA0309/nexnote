import { z } from 'zod';

export const subscription_statusSchema = z.enum(['unpaid','past_due','incomplete_expired','incomplete','canceled','active','trialing']);

export type subscription_statusType = `${z.infer<typeof subscription_statusSchema>}`

export default subscription_statusSchema;
