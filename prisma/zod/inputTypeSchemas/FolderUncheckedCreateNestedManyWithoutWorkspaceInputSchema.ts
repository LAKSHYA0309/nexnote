import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateWithoutWorkspaceInputSchema } from './FolderCreateWithoutWorkspaceInputSchema';
import { FolderUncheckedCreateWithoutWorkspaceInputSchema } from './FolderUncheckedCreateWithoutWorkspaceInputSchema';
import { FolderCreateOrConnectWithoutWorkspaceInputSchema } from './FolderCreateOrConnectWithoutWorkspaceInputSchema';
import { FolderCreateManyWorkspaceInputEnvelopeSchema } from './FolderCreateManyWorkspaceInputEnvelopeSchema';
import { FolderWhereUniqueInputSchema } from './FolderWhereUniqueInputSchema';

export const FolderUncheckedCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.FolderUncheckedCreateNestedManyWithoutWorkspaceInput> = z.object({
  create: z.union([ z.lazy(() => FolderCreateWithoutWorkspaceInputSchema),z.lazy(() => FolderCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => FolderUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => FolderUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FolderCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => FolderCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FolderCreateManyWorkspaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FolderWhereUniqueInputSchema),z.lazy(() => FolderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default FolderUncheckedCreateNestedManyWithoutWorkspaceInputSchema;
