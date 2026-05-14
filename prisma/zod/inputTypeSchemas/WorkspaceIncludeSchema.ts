import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FolderFindManyArgsSchema } from "../outputTypeSchemas/FolderFindManyArgsSchema"
import { FileFindManyArgsSchema } from "../outputTypeSchemas/FileFindManyArgsSchema"
import { CollaboratorFindManyArgsSchema } from "../outputTypeSchemas/CollaboratorFindManyArgsSchema"
import { WorkspaceCountOutputTypeArgsSchema } from "../outputTypeSchemas/WorkspaceCountOutputTypeArgsSchema"

export const WorkspaceIncludeSchema: z.ZodType<Prisma.WorkspaceInclude> = z.object({
  folders: z.union([z.boolean(),z.lazy(() => FolderFindManyArgsSchema)]).optional(),
  files: z.union([z.boolean(),z.lazy(() => FileFindManyArgsSchema)]).optional(),
  collaborators: z.union([z.boolean(),z.lazy(() => CollaboratorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WorkspaceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default WorkspaceIncludeSchema;
