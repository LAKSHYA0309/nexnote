import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FolderCreateManyWorkspaceInputSchema } from './FolderCreateManyWorkspaceInputSchema';

export const FolderCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.FolderCreateManyWorkspaceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FolderCreateManyWorkspaceInputSchema),z.lazy(() => FolderCreateManyWorkspaceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default FolderCreateManyWorkspaceInputEnvelopeSchema;
