import { z } from 'zod';

/////////////////////////////////////////
// CUSTOMER SCHEMA
/////////////////////////////////////////

export const CustomerSchema = z.object({
  id: z.string(),
  stripeCustomerId: z.string().nullable(),
})

export type Customer = z.infer<typeof CustomerSchema>

export default CustomerSchema;
