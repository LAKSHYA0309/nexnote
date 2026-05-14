import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PriceCreateWithoutSubscriptionsInputSchema } from './PriceCreateWithoutSubscriptionsInputSchema';
import { PriceUncheckedCreateWithoutSubscriptionsInputSchema } from './PriceUncheckedCreateWithoutSubscriptionsInputSchema';
import { PriceCreateOrConnectWithoutSubscriptionsInputSchema } from './PriceCreateOrConnectWithoutSubscriptionsInputSchema';
import { PriceUpsertWithoutSubscriptionsInputSchema } from './PriceUpsertWithoutSubscriptionsInputSchema';
import { PriceWhereInputSchema } from './PriceWhereInputSchema';
import { PriceWhereUniqueInputSchema } from './PriceWhereUniqueInputSchema';
import { PriceUpdateToOneWithWhereWithoutSubscriptionsInputSchema } from './PriceUpdateToOneWithWhereWithoutSubscriptionsInputSchema';
import { PriceUpdateWithoutSubscriptionsInputSchema } from './PriceUpdateWithoutSubscriptionsInputSchema';
import { PriceUncheckedUpdateWithoutSubscriptionsInputSchema } from './PriceUncheckedUpdateWithoutSubscriptionsInputSchema';

export const PriceUpdateOneWithoutSubscriptionsNestedInputSchema: z.ZodType<Prisma.PriceUpdateOneWithoutSubscriptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PriceCreateWithoutSubscriptionsInputSchema),z.lazy(() => PriceUncheckedCreateWithoutSubscriptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriceCreateOrConnectWithoutSubscriptionsInputSchema).optional(),
  upsert: z.lazy(() => PriceUpsertWithoutSubscriptionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => PriceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => PriceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => PriceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PriceUpdateToOneWithWhereWithoutSubscriptionsInputSchema),z.lazy(() => PriceUpdateWithoutSubscriptionsInputSchema),z.lazy(() => PriceUncheckedUpdateWithoutSubscriptionsInputSchema) ]).optional(),
}).strict();

export default PriceUpdateOneWithoutSubscriptionsNestedInputSchema;
