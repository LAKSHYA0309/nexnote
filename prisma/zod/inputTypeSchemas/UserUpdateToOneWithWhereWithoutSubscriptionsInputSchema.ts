import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutSubscriptionsInputSchema } from './UserUpdateWithoutSubscriptionsInputSchema';
import { UserUncheckedUpdateWithoutSubscriptionsInputSchema } from './UserUncheckedUpdateWithoutSubscriptionsInputSchema';

export const UserUpdateToOneWithWhereWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSubscriptionsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutSubscriptionsInputSchema;
