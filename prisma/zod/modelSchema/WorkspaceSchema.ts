import { z } from 'zod';

/////////////////////////////////////////
// WORKSPACE SCHEMA
/////////////////////////////////////////

export const WorkspaceSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  workspaceOwner: z.string(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().nullable(),
  inTrash: z.string().nullable(),
  logo: z.string().nullable(),
  bannerUrl: z.string().nullable(),
})

export type Workspace = z.infer<typeof WorkspaceSchema>

export default WorkspaceSchema;
