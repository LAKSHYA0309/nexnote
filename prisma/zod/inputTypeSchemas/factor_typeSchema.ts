import { z } from 'zod';

export const factor_typeSchema = z.enum(['webauthn','totp']);

export type factor_typeType = `${z.infer<typeof factor_typeSchema>}`

export default factor_typeSchema;
