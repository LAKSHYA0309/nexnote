import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorSelectSchema } from '../inputTypeSchemas/CollaboratorSelectSchema';
import { CollaboratorIncludeSchema } from '../inputTypeSchemas/CollaboratorIncludeSchema';

export const CollaboratorArgsSchema: z.ZodType<Prisma.CollaboratorDefaultArgs> = z.object({
  select: z.lazy(() => CollaboratorSelectSchema).optional(),
  include: z.lazy(() => CollaboratorIncludeSchema).optional(),
}).strict();

export default CollaboratorArgsSchema;
