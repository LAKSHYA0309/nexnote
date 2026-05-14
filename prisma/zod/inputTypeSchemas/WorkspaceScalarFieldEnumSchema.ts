import { z } from 'zod';

export const WorkspaceScalarFieldEnumSchema = z.enum(['id','createdAt','workspaceOwner','title','iconId','data','inTrash','logo','bannerUrl']);

export default WorkspaceScalarFieldEnumSchema;
