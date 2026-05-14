import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema } from './CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema';
import { SubscriptionUncheckedCreateNestedManyWithoutUserInputSchema } from './SubscriptionUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  avatarUrl: z.string().optional().nullable(),
  billingAddress: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  paymentMethod: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutAccountsInputSchema;
