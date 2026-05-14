import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderWhereInputSchema } from '../inputTypeSchemas/FolderWhereInputSchema'

export const FolderDeleteManyArgsSchema: z.ZodType<Prisma.FolderDeleteManyArgs> = z.object({
  where: FolderWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default FolderDeleteManyArgsSchema;
