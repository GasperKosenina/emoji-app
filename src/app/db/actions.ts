'use server'
import { revalidatePath } from "next/cache"
import prisma from "../../../prisma"
import { auth } from "@clerk/nextjs"

export async function addPost(formData: FormData) {
  const { userId } = auth()

  if (!userId) {
    throw new Error('You must sign in to post emoji')
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))
  await prisma.post.create({
    data: {
      title: formData.get("emoji") as string,
      userId: userId
    }
  })
  revalidatePath("/")
}


export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return await prisma.post.findMany()
}
