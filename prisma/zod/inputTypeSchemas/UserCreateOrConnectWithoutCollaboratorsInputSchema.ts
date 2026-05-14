import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutCollaboratorsInputSchema } from './UserCreateWithoutCollaboratorsInputSchema';
import { UserUncheckedCreateWithoutCollaboratorsInputSchema } from './UserUncheckedCreateWithoutCollaboratorsInputSchema';

export const UserCreateOrConnectWithoutCollaboratorsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCollaboratorsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutCollaboratorsInputSchema;
