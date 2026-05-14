import { z } from 'zod';

export const factor_statusSchema = z.enum(['verified','unverified']);

export type factor_statusType = `${z.infer<typeof factor_statusSchema>}`

export default factor_statusSchema;
