import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorCreateManyWorkspaceInputSchema } from './CollaboratorCreateManyWorkspaceInputSchema';

export const CollaboratorCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.CollaboratorCreateManyWorkspaceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CollaboratorCreateManyWorkspaceInputSchema),z.lazy(() => CollaboratorCreateManyWorkspaceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CollaboratorCreateManyWorkspaceInputEnvelopeSchema;
