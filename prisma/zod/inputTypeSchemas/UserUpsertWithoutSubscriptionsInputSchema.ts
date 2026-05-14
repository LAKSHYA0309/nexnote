import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutSubscriptionsInputSchema } from './UserUpdateWithoutSubscriptionsInputSchema';
import { UserUncheckedUpdateWithoutSubscriptionsInputSchema } from './UserUncheckedUpdateWithoutSubscriptionsInputSchema';
import { UserCreateWithoutSubscriptionsInputSchema } from './UserCreateWithoutSubscriptionsInputSchema';
import { UserUncheckedCreateWithoutSubscriptionsInputSchema } from './UserUncheckedCreateWithoutSubscriptionsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSubscriptionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutSubscriptionsInputSchema;
