import { z } from 'zod';

/////////////////////////////////////////
// COLLABORATOR SCHEMA
/////////////////////////////////////////

export const CollaboratorSchema = z.object({
  id: z.string().uuid(),
  workspaceId: z.string(),
  createdAt: z.coerce.date(),
  userId: z.string(),
})

export type Collaborator = z.infer<typeof CollaboratorSchema>

export default CollaboratorSchema;
