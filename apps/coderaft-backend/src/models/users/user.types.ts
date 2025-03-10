import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
export { ROLES } from "@prisma/client";

export type User<
  T extends
    | boolean
    | Prisma.UserDefaultArgs<DefaultArgs>
    | null
    | undefined = true
> = Prisma.UserGetPayload<T>;
