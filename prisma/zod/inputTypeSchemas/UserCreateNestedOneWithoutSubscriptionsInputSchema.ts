import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSubscriptionsInputSchema } from './UserCreateWithoutSubscriptionsInputSchema';
import { UserUncheckedCreateWithoutSubscriptionsInputSchema } from './UserUncheckedCreateWithoutSubscriptionsInputSchema';
import { UserCreateOrConnectWithoutSubscriptionsInputSchema } from './UserCreateOrConnectWithoutSubscriptionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutSubscriptionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubscriptionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutSubscriptionsInputSchema;
