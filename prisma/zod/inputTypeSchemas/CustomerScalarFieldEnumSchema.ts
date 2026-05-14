import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id','stripeCustomerId']);

export default CustomerScalarFieldEnumSchema;
