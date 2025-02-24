import { z } from "zod";
import { ROLES, User } from "@/models/users/user.types";

export const createUserBody = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  role: z.nativeEnum(ROLES).optional(),
});

export type CreateUserBody = z.infer<typeof createUserBody>;

export interface CreateUserResponse {
  message: string;
  data: {
    user: User;
  };
}
