import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutSubscriptionsInputSchema } from './UserCreateWithoutSubscriptionsInputSchema';
import { UserUncheckedCreateWithoutSubscriptionsInputSchema } from './UserUncheckedCreateWithoutSubscriptionsInputSchema';

export const UserCreateOrConnectWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubscriptionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutSubscriptionsInputSchema;
