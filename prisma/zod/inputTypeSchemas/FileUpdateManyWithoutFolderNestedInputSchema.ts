import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutFolderInputSchema } from './FileCreateWithoutFolderInputSchema';
import { FileUncheckedCreateWithoutFolderInputSchema } from './FileUncheckedCreateWithoutFolderInputSchema';
import { FileCreateOrConnectWithoutFolderInputSchema } from './FileCreateOrConnectWithoutFolderInputSchema';
import { FileUpsertWithWhereUniqueWithoutFolderInputSchema } from './FileUpsertWithWhereUniqueWithoutFolderInputSchema';
import { FileCreateManyFolderInputEnvelopeSchema } from './FileCreateManyFolderInputEnvelopeSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateWithWhereUniqueWithoutFolderInputSchema } from './FileUpdateWithWhereUniqueWithoutFolderInputSchema';
import { FileUpdateManyWithWhereWithoutFolderInputSchema } from './FileUpdateManyWithWhereWithoutFolderInputSchema';
import { FileScalarWhereInputSchema } from './FileScalarWhereInputSchema';

export const FileUpdateManyWithoutFolderNestedInputSchema: z.ZodType<Prisma.FileUpdateManyWithoutFolderNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutFolderInputSchema),z.lazy(() => FileCreateWithoutFolderInputSchema).array(),z.lazy(() => FileUncheckedCreateWithoutFolderInputSchema),z.lazy(() => FileUncheckedCreateWithoutFolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FileCreateOrConnectWithoutFolderInputSchema),z.lazy(() => FileCreateOrConnectWithoutFolderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FileUpsertWithWhereUniqueWithoutFolderInputSchema),z.lazy(() => FileUpsertWithWhereUniqueWithoutFolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FileCreateManyFolderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FileUpdateWithWhereUniqueWithoutFolderInputSchema),z.lazy(() => FileUpdateWithWhereUniqueWithoutFolderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FileUpdateManyWithWhereWithoutFolderInputSchema),z.lazy(() => FileUpdateManyWithWhereWithoutFolderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FileScalarWhereInputSchema),z.lazy(() => FileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default FileUpdateManyWithoutFolderNestedInputSchema;
