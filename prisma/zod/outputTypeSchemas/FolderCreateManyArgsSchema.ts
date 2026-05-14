import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderCreateManyInputSchema } from '../inputTypeSchemas/FolderCreateManyInputSchema'

export const FolderCreateManyArgsSchema: z.ZodType<Prisma.FolderCreateManyArgs> = z.object({
  data: z.union([ FolderCreateManyInputSchema,FolderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default FolderCreateManyArgsSchema;
