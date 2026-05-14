import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CollaboratorCreateManyUserInputSchema } from './CollaboratorCreateManyUserInputSchema';

export const CollaboratorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CollaboratorCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CollaboratorCreateManyUserInputSchema),z.lazy(() => CollaboratorCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CollaboratorCreateManyUserInputEnvelopeSchema;
