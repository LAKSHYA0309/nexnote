import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutWorkspaceInputSchema } from './FileCreateWithoutWorkspaceInputSchema';
import { FileUncheckedCreateWithoutWorkspaceInputSchema } from './FileUncheckedCreateWithoutWorkspaceInputSchema';
import { FileCreateOrConnectWithoutWorkspaceInputSchema } from './FileCreateOrConnectWithoutWorkspaceInputSchema';
import { FileUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './FileUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { FileCreateManyWorkspaceInputEnvelopeSchema } from './FileCreateManyWorkspaceInputEnvelopeSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';
import { FileUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './FileUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { FileUpdateManyWithWhereWithoutWorkspaceInputSchema } from './FileUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { FileScalarWhereInputSchema } from './FileScalarWhereInputSchema';

export const FileUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.FileUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutWorkspaceInputSchema),z.lazy(() => FileCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => FileUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => FileUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FileCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => FileCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FileUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => FileUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FileCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FileUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => FileUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FileUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => FileUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FileScalarWhereInputSchema),z.lazy(() => FileScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default FileUpdateManyWithoutWorkspaceNestedInputSchema;
