import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CollaboratorCreateManyInputSchema } from '../inputTypeSchemas/CollaboratorCreateManyInputSchema'

export const CollaboratorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CollaboratorCreateManyAndReturnArgs> = z.object({
  data: z.union([ CollaboratorCreateManyInputSchema,CollaboratorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CollaboratorCreateManyAndReturnArgsSchema;
