import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorUpdateManyMutationInputSchema } from '../inputTypeSchemas/CollaboratorUpdateManyMutationInputSchema'
import { CollaboratorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CollaboratorUncheckedUpdateManyInputSchema'
import { CollaboratorWhereInputSchema } from '../inputTypeSchemas/CollaboratorWhereInputSchema'

export const CollaboratorUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CollaboratorUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CollaboratorUpdateManyMutationInputSchema,CollaboratorUncheckedUpdateManyInputSchema ]),
  where: CollaboratorWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CollaboratorUpdateManyAndReturnArgsSchema;
