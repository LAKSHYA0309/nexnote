import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateWithoutWorkspaceInputSchema } from './FolderCreateWithoutWorkspaceInputSchema';
import { FolderUncheckedCreateWithoutWorkspaceInputSchema } from './FolderUncheckedCreateWithoutWorkspaceInputSchema';
import { FolderCreateOrConnectWithoutWorkspaceInputSchema } from './FolderCreateOrConnectWithoutWorkspaceInputSchema';
import { FolderUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './FolderUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { FolderCreateManyWorkspaceInputEnvelopeSchema } from './FolderCreateManyWorkspaceInputEnvelopeSchema';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';
import { FolderUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './FolderUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { FolderUpdateManyWithWhereWithoutWorkspaceInputSchema } from './FolderUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { FolderScalarWhereInputSchema } from './FolderScalarWhereInputSchema';

export const FolderUncheckedUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.FolderUncheckedUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => FolderCreateWithoutWorkspaceInputSchema),z.lazy(() => FolderCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => FolderUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => FolderUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FolderCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => FolderCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FolderUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => FolderUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FolderCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => FolderWhereUniqueInputSchema),z.lazy(() => FolderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FolderWhereUniqueInputSchema),z.lazy(() => FolderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FolderWhereUniqueInputSchema),z.lazy(() => FolderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FolderWhereUniqueInputSchema),z.lazy(() => FolderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FolderUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => FolderUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FolderUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => FolderUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FolderScalarWhereInputSchema),z.lazy(() => FolderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default FolderUncheckedUpdateManyWithoutWorkspaceNestedInputSchema;
