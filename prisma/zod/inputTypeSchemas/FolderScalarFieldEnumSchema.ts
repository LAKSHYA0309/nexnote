import { z } from 'zod';

export const FolderScalarFieldEnumSchema = z.enum(['id','createdAt','title','iconId','data','inTrash','bannerUrl','workspaceId']);

export default FolderScalarFieldEnumSchema;
