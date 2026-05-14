import { z } from 'zod';

export const key_statusSchema = z.enum(['expired','invalid','valid','default']);

export type key_statusType = `${z.infer<typeof key_statusSchema>}`

export default key_statusSchema;
