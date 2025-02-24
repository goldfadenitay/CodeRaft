import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export type Post<
  T extends
    | boolean
    | Prisma.PostDefaultArgs<DefaultArgs>
    | null
    | undefined = true
> = Prisma.PostGetPayload<T>;
