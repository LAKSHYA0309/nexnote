import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FileCreateManyInputSchema } from '../inputTypeSchemas/FileCreateManyInputSchema'

export const FileCreateManyAndReturnArgsSchema: z.ZodType<Prisma.FileCreateManyAndReturnArgs> = z.object({
  data: z.union([ FileCreateManyInputSchema,FileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default FileCreateManyAndReturnArgsSchema;
