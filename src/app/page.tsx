import AddPostForm from "@/components/AddPostForm";
import { clerkClient } from "@clerk/nextjs";
import Image from "next/image";
import { getPosts } from "./db/actions";

interface Emoji {
  id: string;
  title: string;
  userId: string;
}

interface Author {
  imageUrl: string;
  firstName: string | null;
}

export default async function Home() {
  const emojis: Emoji[] = await getPosts();
  return (
    <div className="flex flex-col w-full">
      <div className="flex border-b-2 border-black p-7">
        <AddPostForm />
      </div>
      {emojis.map(async (e) => (
        <div key={e.id} className="border-b-2 border-black p-7 flex gap-3">
          <Image
            src={(await getAuthorsData(e.userId)).imageUrl}
            alt="users profile"
            width={46}
            height={46}
          />
          <div className="flex flex-col">
            <div className="flex text-slate-300 gap-1">
              <span>@{(await getAuthorsData(e.userId)).firstName} </span> ·{" "}
              <span>1 hour ago</span>
            </div>
            <span>{e.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

async function getAuthorsData(userId: string) {
  const user = await clerkClient.users.getUser(userId);
  const author: Author = {
    imageUrl: user.imageUrl,
    firstName: user.firstName,
  };
  return author;
}
