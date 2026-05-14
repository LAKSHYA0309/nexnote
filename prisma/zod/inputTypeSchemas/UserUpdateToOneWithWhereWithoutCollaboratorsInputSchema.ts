import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutCollaboratorsInputSchema } from './UserUpdateWithoutCollaboratorsInputSchema';
import { UserUncheckedUpdateWithoutCollaboratorsInputSchema } from './UserUncheckedUpdateWithoutCollaboratorsInputSchema';

export const UserUpdateToOneWithWhereWithoutCollaboratorsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCollaboratorsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutCollaboratorsInputSchema;
