import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorWhereInputSchema } from '../inputTypeSchemas/CollaboratorWhereInputSchema'

export const CollaboratorDeleteManyArgsSchema: z.ZodType<Prisma.CollaboratorDeleteManyArgs> = z.object({
  where: CollaboratorWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CollaboratorDeleteManyArgsSchema;
