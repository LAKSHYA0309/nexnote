import { z } from 'zod';

export const key_typeSchema = z.enum(['stream_xchacha20','secretstream','secretbox','kdf','generichash','shorthash','auth','hmacsha256','hmacsha512','aead_det','aead_ietf']);

export type key_typeType = `${z.infer<typeof key_typeSchema>}`

export default key_typeSchema;
