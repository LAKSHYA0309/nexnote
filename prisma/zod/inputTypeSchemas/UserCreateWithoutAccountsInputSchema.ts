import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { CollaboratorCreateNestedManyWithoutUserInputSchema } from './CollaboratorCreateNestedManyWithoutUserInputSchema';
import { SubscriptionCreateNestedManyWithoutUserInputSchema } from './SubscriptionCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  avatarUrl: z.string().optional().nullable(),
  billingAddress: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  paymentMethod: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  collaborators: z.lazy(() => CollaboratorCreateNestedManyWithoutUserInputSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutAccountsInputSchema;
