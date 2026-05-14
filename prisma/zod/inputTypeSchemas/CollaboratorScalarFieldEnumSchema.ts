import { z } from 'zod';

export const CollaboratorScalarFieldEnumSchema = z.enum(['id','workspaceId','createdAt','userId']);

export default CollaboratorScalarFieldEnumSchema;
