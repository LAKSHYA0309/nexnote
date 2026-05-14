import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorCreateWithoutWorkspaceInputSchema } from './CollaboratorCreateWithoutWorkspaceInputSchema';
import { CollaboratorUncheckedCreateWithoutWorkspaceInputSchema } from './CollaboratorUncheckedCreateWithoutWorkspaceInputSchema';
import { CollaboratorCreateOrConnectWithoutWorkspaceInputSchema } from './CollaboratorCreateOrConnectWithoutWorkspaceInputSchema';
import { CollaboratorCreateManyWorkspaceInputEnvelopeSchema } from './CollaboratorCreateManyWorkspaceInputEnvelopeSchema';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';

export const CollaboratorUncheckedCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.CollaboratorUncheckedCreateNestedManyWithoutWorkspaceInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyWorkspaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CollaboratorUncheckedCreateNestedManyWithoutWorkspaceInputSchema;
