import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FileCreateManyFolderInputSchema } from './FileCreateManyFolderInputSchema';

export const FileCreateManyFolderInputEnvelopeSchema: z.ZodType<Prisma.FileCreateManyFolderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => FileCreateManyFolderInputSchema),z.lazy(() => FileCreateManyFolderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default FileCreateManyFolderInputEnvelopeSchema;
