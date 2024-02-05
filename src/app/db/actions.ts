"use server";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { prisma } from "../../../prisma";
import { z } from "zod";

// TODO: fix: z.emoji() does not validate numbers
const schema = z.object({
  emoji: z
    .string()
    .emoji("Only emojis are allowed")
    .min(1)
    .max(2, "Only one emoji is allowed!"),
});

export async function addPost(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    // throw new Error("You must be signed in to post emojis");
    return {
      error: "You must be signed in to post emojis!",
    };
  }

  const validateFields = schema.safeParse({
    emoji: formData.get("emoji"),
  });

  if (!validateFields.success) {
    const errors = validateFields.error.issues.map((issue) => issue.message);
    // throw new Error(errors[0]);
    return {
      error: errors[0],
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    await prisma.post.create({
      data: {
        emoji: formData.get("emoji") as string,
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
  revalidatePath("/");
}

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot get the emojis. Try again!");
  }
}
