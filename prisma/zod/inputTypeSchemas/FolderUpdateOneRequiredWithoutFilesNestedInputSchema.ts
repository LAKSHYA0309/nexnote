import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateWithoutFilesInputSchema } from './FolderCreateWithoutFilesInputSchema';
import { FolderUncheckedCreateWithoutFilesInputSchema } from './FolderUncheckedCreateWithoutFilesInputSchema';
import { FolderCreateOrConnectWithoutFilesInputSchema } from './FolderCreateOrConnectWithoutFilesInputSchema';
import { FolderUpsertWithoutFilesInputSchema } from './FolderUpsertWithoutFilesInputSchema';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';
import { FolderUpdateToOneWithWhereWithoutFilesInputSchema } from './FolderUpdateToOneWithWhereWithoutFilesInputSchema';
import { FolderUpdateWithoutFilesInputSchema } from './FolderUpdateWithoutFilesInputSchema';
import { FolderUncheckedUpdateWithoutFilesInputSchema } from './FolderUncheckedUpdateWithoutFilesInputSchema';

export const FolderUpdateOneRequiredWithoutFilesNestedInputSchema: z.ZodType<Prisma.FolderUpdateOneRequiredWithoutFilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => FolderCreateWithoutFilesInputSchema),z.lazy(() => FolderUncheckedCreateWithoutFilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FolderCreateOrConnectWithoutFilesInputSchema).optional(),
  upsert: z.lazy(() => FolderUpsertWithoutFilesInputSchema).optional(),
  connect: z.lazy(() => FolderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FolderUpdateToOneWithWhereWithoutFilesInputSchema),z.lazy(() => FolderUpdateWithoutFilesInputSchema),z.lazy(() => FolderUncheckedUpdateWithoutFilesInputSchema) ]).optional(),
}).strict();

export default FolderUpdateOneRequiredWithoutFilesNestedInputSchema;
