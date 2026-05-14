import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateManyWorkspaceInputSchema } from './FileCreateManyWorkspaceInputSchema';

export const FileCreateManyWorkspaceInputEnvelopeSchema: z.ZodType<Prisma.FileCreateManyWorkspaceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FileCreateManyWorkspaceInputSchema),z.lazy(() => FileCreateManyWorkspaceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default FileCreateManyWorkspaceInputEnvelopeSchema;
