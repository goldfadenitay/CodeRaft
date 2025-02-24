import { ControllerFn } from "@/utils/controller";
import { HttpRequest } from "@/utils/http";
import { validate } from "@/utils/validation";
import { createNewUserService } from "./create-new-user.service";
import { created } from "@/utils/response";
import { createUserBody, CreateUserResponse } from "./create.types";

export const createNewUserController: ControllerFn<CreateUserResponse> = async (
  req: HttpRequest
) => {
  const body = validate(createUserBody, req.body);
  const user = await createNewUserService(body);

  return created({
    message: "User created successfully",
    data: { user },
  });
};
