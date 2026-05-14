import { z } from 'zod';

export const actionSchema = z.enum(['ERROR','TRUNCATE','DELETE','UPDATE','INSERT']);

export type actionType = `${z.infer<typeof actionSchema>}`

export default actionSchema;
