'use server'
import { revalidatePath } from "next/cache"
import prisma from "../../../prisma"

export async function addPost(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await prisma.post.create({
    data: {
      title: formData.get("emoji") as string,
      userId: "testUserId"
    }
  })
  revalidatePath("/")
}
