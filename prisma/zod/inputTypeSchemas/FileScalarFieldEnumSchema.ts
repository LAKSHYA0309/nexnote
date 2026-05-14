import { z } from 'zod';

export const FileScalarFieldEnumSchema = z.enum(['id','createdAt','title','iconId','data','inTrash','bannerUrl','workspaceId','folderId']);

export default FileScalarFieldEnumSchema;
