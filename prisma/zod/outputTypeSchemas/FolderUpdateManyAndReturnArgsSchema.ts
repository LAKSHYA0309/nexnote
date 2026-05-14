import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderUpdateManyMutationInputSchema } from '../inputTypeSchemas/FolderUpdateManyMutationInputSchema'
import { FolderUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FolderUncheckedUpdateManyInputSchema'
import { FolderWhereInputSchema } from '../inputTypeSchemas/FolderWhereInputSchema'

export const FolderUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.FolderUpdateManyAndReturnArgs> = z.object({
  data: z.union([ FolderUpdateManyMutationInputSchema,FolderUncheckedUpdateManyInputSchema ]),
  where: FolderWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default FolderUpdateManyAndReturnArgsSchema;
