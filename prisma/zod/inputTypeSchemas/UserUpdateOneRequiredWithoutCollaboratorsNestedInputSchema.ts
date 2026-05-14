import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCollaboratorsInputSchema } from './UserCreateWithoutCollaboratorsInputSchema';
import { UserUncheckedCreateWithoutCollaboratorsInputSchema } from './UserUncheckedCreateWithoutCollaboratorsInputSchema';
import { UserCreateOrConnectWithoutCollaboratorsInputSchema } from './UserCreateOrConnectWithoutCollaboratorsInputSchema';
import { UserUpsertWithoutCollaboratorsInputSchema } from './UserUpsertWithoutCollaboratorsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutCollaboratorsInputSchema } from './UserUpdateToOneWithWhereWithoutCollaboratorsInputSchema';
import { UserUpdateWithoutCollaboratorsInputSchema } from './UserUpdateWithoutCollaboratorsInputSchema';
import { UserUncheckedUpdateWithoutCollaboratorsInputSchema } from './UserUncheckedUpdateWithoutCollaboratorsInputSchema';

export const UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCollaboratorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCollaboratorsInputSchema),z.lazy(() => UserUpdateWithoutCollaboratorsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollaboratorsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutCollaboratorsNestedInputSchema;
