import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutFolderInputSchema } from './FileCreateWithoutFolderInputSchema';
import { FileUncheckedCreateWithoutFolderInputSchema } from './FileUncheckedCreateWithoutFolderInputSchema';
import { FileCreateOrConnectWithoutFolderInputSchema } from './FileCreateOrConnectWithoutFolderInputSchema';
import { FileCreateManyFolderInputEnvelopeSchema } from './FileCreateManyFolderInputEnvelopeSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';

export const FileCreateNestedManyWithoutFolderInputSchema: z.ZodType<Prisma.FileCreateNestedManyWithoutFolderInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutFolderInputSchema),z.lazy(() => FileCreateWithoutFolderInputSchema).array(),z.lazy(() => FileUncheckedCreateWithoutFolderInputSchema),z.lazy(() => FileUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FileCreateOrConnectWithoutFolderInputSchema),z.lazy(() => FileCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FileCreateManyFolderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default FileCreateNestedManyWithoutFolderInputSchema;
