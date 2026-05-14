import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderWhereInputSchema } from '../inputTypeSchemas/FolderWhereInputSchema'
import { FolderOrderByWithAggregationInputSchema } from '../inputTypeSchemas/FolderOrderByWithAggregationInputSchema'
import { FolderScalarFieldEnumSchema } from '../inputTypeSchemas/FolderScalarFieldEnumSchema'
import { FolderScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/FolderScalarWhereWithAggregatesInputSchema'

export const FolderGroupByArgsSchema: z.ZodType<Prisma.FolderGroupByArgs> = z.object({
  where: FolderWhereInputSchema.optional(),
  orderBy: z.union([ FolderOrderByWithAggregationInputSchema.array(),FolderOrderByWithAggregationInputSchema ]).optional(),
  by: FolderScalarFieldEnumSchema.array(),
  having: FolderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default FolderGroupByArgsSchema;
