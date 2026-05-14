import { z } from 'zod';

export const code_challenge_methodSchema = z.enum(['plain','s256']);

export type code_challenge_methodType = `${z.infer<typeof code_challenge_methodSchema>}`

export default code_challenge_methodSchema;
