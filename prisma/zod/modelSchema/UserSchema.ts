import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  billingAddress: JsonValueSchema.nullable(),
  updatedAt: z.coerce.date().nullable(),
  paymentMethod: JsonValueSchema.nullable(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
