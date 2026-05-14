import { z } from 'zod';

export const PriceScalarFieldEnumSchema = z.enum(['id','productId','active','description','unitAmount','currency','type','interval','intervalCount','trialPeriodDays','metadata']);

export default PriceScalarFieldEnumSchema;
