import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateWithoutWorkspaceInputSchema } from './FileCreateWithoutWorkspaceInputSchema';
import { FileUncheckedCreateWithoutWorkspaceInputSchema } from './FileUncheckedCreateWithoutWorkspaceInputSchema';
import { FileCreateOrConnectWithoutWorkspaceInputSchema } from './FileCreateOrConnectWithoutWorkspaceInputSchema';
import { FileCreateManyWorkspaceInputEnvelopeSchema } from './FileCreateManyWorkspaceInputEnvelopeSchema';
import { FileWhereUniqueInputSchema } from './FileWhereUniqueInputSchema';

export const FileUncheckedCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.FileUncheckedCreateNestedManyWithoutWorkspaceInput> = z.object({
  create: z.union([ z.lazy(() => FileCreateWithoutWorkspaceInputSchema),z.lazy(() => FileCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => FileUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => FileUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FileCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => FileCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => FileCreateManyWorkspaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => FileWhereUniqueInputSchema),z.lazy(() => FileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default FileUncheckedCreateNestedManyWithoutWorkspaceInputSchema;
