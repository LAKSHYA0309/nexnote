import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceCreateWithoutProductInputSchema } from './PriceCreateWithoutProductInputSchema';
import { PriceUncheckedCreateWithoutProductInputSchema } from './PriceUncheckedCreateWithoutProductInputSchema';
import { PriceCreateOrConnectWithoutProductInputSchema } from './PriceCreateOrConnectWithoutProductInputSchema';
import { PriceCreateManyProductInputEnvelopeSchema } from './PriceCreateManyProductInputEnvelopeSchema';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';

export const PriceCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.PriceCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => PriceCreateWithoutProductInputSchema),z.lazy(() => PriceCreateWithoutProductInputSchema).array(),z.lazy(() => PriceUncheckedCreateWithoutProductInputSchema),z.lazy(() => PriceUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PriceCreateOrConnectWithoutProductInputSchema),z.lazy(() => PriceCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PriceCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PriceWhereUniqueInputSchema),z.lazy(() => PriceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PriceCreateNestedManyWithoutProductInputSchema;
