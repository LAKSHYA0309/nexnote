import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorCreateWithoutWorkspaceInputSchema } from './CollaboratorCreateWithoutWorkspaceInputSchema';
import { CollaboratorUncheckedCreateWithoutWorkspaceInputSchema } from './CollaboratorUncheckedCreateWithoutWorkspaceInputSchema';
import { CollaboratorCreateOrConnectWithoutWorkspaceInputSchema } from './CollaboratorCreateOrConnectWithoutWorkspaceInputSchema';
import { CollaboratorUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './CollaboratorUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { CollaboratorCreateManyWorkspaceInputEnvelopeSchema } from './CollaboratorCreateManyWorkspaceInputEnvelopeSchema';
import { CollaboratorWhereUniqueInputSchema } from './CollaboratorWhereUniqueInputSchema';
import { CollaboratorUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './CollaboratorUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { CollaboratorUpdateManyWithWhereWithoutWorkspaceInputSchema } from './CollaboratorUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { CollaboratorScalarWhereInputSchema } from './CollaboratorScalarWhereInputSchema';

export const CollaboratorUncheckedUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.CollaboratorUncheckedUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => CollaboratorCreateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => CollaboratorUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CollaboratorCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CollaboratorCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CollaboratorWhereUniqueInputSchema),z.lazy(() => CollaboratorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CollaboratorUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => CollaboratorUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CollaboratorScalarWhereInputSchema),z.lazy(() => CollaboratorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CollaboratorUncheckedUpdateManyWithoutWorkspaceNestedInputSchema;
