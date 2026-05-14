import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceCreateWithoutProductInputSchema } from './PriceCreateWithoutProductInputSchema';
import { PriceUncheckedCreateWithoutProductInputSchema } from './PriceUncheckedCreateWithoutProductInputSchema';
import { PriceCreateOrConnectWithoutProductInputSchema } from './PriceCreateOrConnectWithoutProductInputSchema';
import { PriceUpsertWithWhereUniqueWithoutProductInputSchema } from './PriceUpsertWithWhereUniqueWithoutProductInputSchema';
import { PriceCreateManyProductInputEnvelopeSchema } from './PriceCreateManyProductInputEnvelopeSchema';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';
import { PriceUpdateWithWhereUniqueWithoutProductInputSchema } from './PriceUpdateWithWhereUniqueWithoutProductInputSchema';
import { PriceUpdateManyWithWhereWithoutProductInputSchema } from './PriceUpdateManyWithWhereWithoutProductInputSchema';
import { PriceScalarWhereInputSchema } from './PriceScalarWhereInputSchema';

export const PriceUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.PriceUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriceCreateWithoutProductInputSchema),z.lazy(() => PriceCreateWithoutProductInputSchema).array(),z.lazy(() => PriceUncheckedCreateWithoutProductInputSchema),z.lazy(() => PriceUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PriceCreateOrConnectWithoutProductInputSchema),z.lazy(() => PriceCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PriceUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => PriceUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PriceCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PriceWhereUniqueInputSchema),z.lazy(() => PriceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PriceWhereUniqueInputSchema),z.lazy(() => PriceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PriceWhereUniqueInputSchema),z.lazy(() => PriceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PriceWhereUniqueInputSchema),z.lazy(() => PriceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PriceUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => PriceUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PriceUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => PriceUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PriceScalarWhereInputSchema),z.lazy(() => PriceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PriceUpdateManyWithoutProductNestedInputSchema;
