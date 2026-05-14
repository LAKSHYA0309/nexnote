import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutCollaboratorsInputSchema } from './UserUpdateWithoutCollaboratorsInputSchema';
import { UserUncheckedUpdateWithoutCollaboratorsInputSchema } from './UserUncheckedUpdateWithoutCollaboratorsInputSchema';
import { UserCreateWithoutCollaboratorsInputSchema } from './UserCreateWithoutCollaboratorsInputSchema';
import { UserUncheckedCreateWithoutCollaboratorsInputSchema } from './UserUncheckedCreateWithoutCollaboratorsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutCollaboratorsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCollaboratorsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCollaboratorsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratorsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutCollaboratorsInputSchema;
