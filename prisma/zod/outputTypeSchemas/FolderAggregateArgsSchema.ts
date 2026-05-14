import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderWhereInputSchema } from '../inputTypeSchemas/FolderWhereInputSchema'
import { FolderOrderByWithRelationInputSchema } from '../inputTypeSchemas/FolderOrderByWithRelationInputSchema'
import { FolderWhereUniqueInputSchema } from '../inputTypeSchemas/FolderWhereUniqueInputSchema'

export const FolderAggregateArgsSchema: z.ZodType<Prisma.FolderAggregateArgs> = z.object({
  where: FolderWhereInputSchema.optional(),
  orderBy: z.union([ FolderOrderByWithRelationInputSchema.array(),FolderOrderByWithRelationInputSchema ]).optional(),
  cursor: FolderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FolderAggregateArgsSchema;
