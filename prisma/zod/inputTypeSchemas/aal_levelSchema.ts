import { z } from 'zod';

export const aal_levelSchema = z.enum(['aal3','aal2','aal1']);

export type aal_levelType = `${z.infer<typeof aal_levelSchema>}`

export default aal_levelSchema;
