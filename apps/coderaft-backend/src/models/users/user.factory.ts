import { faker } from "@faker-js/faker";
import { prisma } from "@/models/prsima-client";
import { ROLES, User } from "./user.types";

export const createUser = async ({
  name = faker.person.fullName(),
  email = faker.internet.email(),
  createdAt = new Date(),
  role = faker.helpers.enumValue(ROLES),
  isActive = true,
  deletedAt = null,
  updatedAt = new Date(),
}: Partial<User>) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      createdAt,
      role,
      isActive,
      deletedAt,
      updatedAt,
    },
  });
  return user;
};
