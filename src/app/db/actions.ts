"use server";
import { revalidatePath } from "next/cache";
import prisma from "../../../prisma";
import { auth } from "@clerk/nextjs";
import { z } from "zod";

const schema = z.object({
  emoji: z.string().emoji().min(1).max(280),
});

export async function addPost(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("You must be signed in to post emojis");
  }

  const validateFields = schema.safeParse({
    emoji: formData.get("emoji"),
  });

  if (!validateFields.success) {
    throw new Error("Only emojis are allowed!");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await prisma.post.create({
    data: {
      title: formData.get("emoji") as string,
      userId: userId,
    },
  });
  revalidatePath("/");
}

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await prisma.post.findMany();
}
