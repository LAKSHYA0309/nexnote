import { z } from 'zod';

/////////////////////////////////////////
// FOLDER SCHEMA
/////////////////////////////////////////

export const FolderSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().nullable(),
  inTrash: z.string().nullable(),
  bannerUrl: z.string().nullable(),
  workspaceId: z.string(),
})

export type Folder = z.infer<typeof FolderSchema>

export default FolderSchema;
