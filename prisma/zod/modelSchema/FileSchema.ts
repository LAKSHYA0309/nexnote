import { z } from 'zod';

/////////////////////////////////////////
// FILE SCHEMA
/////////////////////////////////////////

export const FileSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  title: z.string(),
  iconId: z.string(),
  data: z.string().nullable(),
  inTrash: z.string().nullable(),
  bannerUrl: z.string().nullable(),
  workspaceId: z.string(),
  folderId: z.string(),
})

export type File = z.infer<typeof FileSchema>

export default FileSchema;
