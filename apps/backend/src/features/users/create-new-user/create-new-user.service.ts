import { createUser } from "@/models/users/create-new-user.model";
import { User } from "@/models/users/user.types";
import { CreateUserBody } from "./create.types";

export const createNewUserService = async (
  data: CreateUserBody
): Promise<User> => {
  const user = await createUser(data);
  return user;
};
