import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableBigIntFieldUpdateOperationsInputSchema } from './NullableBigIntFieldUpdateOperationsInputSchema';
import { pricing_typeSchema } from './pricing_typeSchema';
import { NullableEnumpricing_typeFieldUpdateOperationsInputSchema } from './NullableEnumpricing_typeFieldUpdateOperationsInputSchema';
import { pricing_plan_intervalSchema } from './pricing_plan_intervalSchema';
import { NullableEnumpricing_plan_intervalFieldUpdateOperationsInputSchema } from './NullableEnumpricing_plan_intervalFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { SubscriptionUncheckedUpdateManyWithoutPriceNestedInputSchema } from './SubscriptionUncheckedUpdateManyWithoutPriceNestedInputSchema';

export const PriceUncheckedUpdateInputSchema: z.ZodType<Prisma.PriceUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  active: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  unitAmount: z.union([ z.bigint(),z.lazy(() => NullableBigIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  currency: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => pricing_typeSchema),z.lazy(() => NullableEnumpricing_typeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  interval: z.union([ z.lazy(() => pricing_plan_intervalSchema),z.lazy(() => NullableEnumpricing_plan_intervalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  intervalCount: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  trialPeriodDays: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutPriceNestedInputSchema).optional()
}).strict();

export default PriceUncheckedUpdateInputSchema;
