import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSubscriptionsInputSchema } from './UserCreateWithoutSubscriptionsInputSchema';
import { UserUncheckedCreateWithoutSubscriptionsInputSchema } from './UserUncheckedCreateWithoutSubscriptionsInputSchema';
import { UserCreateOrConnectWithoutSubscriptionsInputSchema } from './UserCreateOrConnectWithoutSubscriptionsInputSchema';
import { UserUpsertWithoutSubscriptionsInputSchema } from './UserUpsertWithoutSubscriptionsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutSubscriptionsInputSchema } from './UserUpdateToOneWithWhereWithoutSubscriptionsInputSchema';
import { UserUpdateWithoutSubscriptionsInputSchema } from './UserUpdateWithoutSubscriptionsInputSchema';
import { UserUncheckedUpdateWithoutSubscriptionsInputSchema } from './UserUncheckedUpdateWithoutSubscriptionsInputSchema';

export const UserUpdateOneRequiredWithoutSubscriptionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSubscriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSubscriptionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSubscriptionsInputSchema),z.lazy(() => UserUpdateWithoutSubscriptionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSubscriptionsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutSubscriptionsNestedInputSchema;
