import { CreateUserBody } from "@/features/users/create-new-user/create.types";
import { User, ROLES } from "@/models/users/user.types";
import { prisma } from "@/models/prsima-client";

export const createUser = async (data: CreateUserBody): Promise<User> => {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      role: data.role as ROLES,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      serialId: true,
      updatedAt: true,
      deletedAt: true,
      isActive: true,
    },
  });
};
