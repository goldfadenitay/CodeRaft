import { faker } from "@faker-js/faker";
import { prisma } from "../../prisma-client";
import { Post } from "./post.types";

export const postFactory = async ({
  title = faker.lorem.sentence(),
  content = faker.lorem.paragraph(),
  authorId = null,
  createdAt = new Date(),
}: Partial<Post>) => {
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId,
      createdAt,
    },
  });
  return post;
};
