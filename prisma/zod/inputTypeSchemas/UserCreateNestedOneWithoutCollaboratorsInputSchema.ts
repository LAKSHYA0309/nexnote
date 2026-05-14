import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutCollaboratorsInputSchema } from './UserCreateWithoutCollaboratorsInputSchema';
import { UserUncheckedCreateWithoutCollaboratorsInputSchema } from './UserUncheckedCreateWithoutCollaboratorsInputSchema';
import { UserCreateOrConnectWithoutCollaboratorsInputSchema } from './UserCreateOrConnectWithoutCollaboratorsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutCollaboratorsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCollaboratorsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutCollaboratorsInputSchema;
