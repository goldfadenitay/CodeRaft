import { faker } from "@faker-js/faker";
import { prisma } from "../../prisma-client";
import { User } from "./user.types";

export const createUser = async ({
  name = faker.person.fullName(),
  email = faker.internet.email(),
  createdAt = new Date(),
}: Partial<User>) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      createdAt,
    },
  });
  return user;
};
