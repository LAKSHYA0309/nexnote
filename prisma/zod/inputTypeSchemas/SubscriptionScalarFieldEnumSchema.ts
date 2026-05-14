import { z } from 'zod';

export const SubscriptionScalarFieldEnumSchema = z.enum(['id','userId','status','metadata','priceId','quantity','cancelAtPeriodEnd','created','currentPeriodStart','currentPeriodEnd','endedAt','cancelAt','canceledAt','trialStart','trialEnd']);

export default SubscriptionScalarFieldEnumSchema;
