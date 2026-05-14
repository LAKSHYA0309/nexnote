import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileUpdateManyMutationInputSchema } from '../inputTypeSchemas/FileUpdateManyMutationInputSchema'
import { FileUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FileUncheckedUpdateManyInputSchema'
import { FileWhereInputSchema } from '../inputTypeSchemas/FileWhereInputSchema'

export const FileUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.FileUpdateManyAndReturnArgs> = z.object({
  data: z.union([ FileUpdateManyMutationInputSchema,FileUncheckedUpdateManyInputSchema ]),
  where: FileWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default FileUpdateManyAndReturnArgsSchema;
