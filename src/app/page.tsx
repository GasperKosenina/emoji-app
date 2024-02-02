import AddPostForm from "@/components/AddPostForm";
import { getPosts } from "./db/actions";
import { UserButton } from "@clerk/nextjs";


interface Emoji {
  id: string
  title: string
}

export default async function Home() {
  const emojis: Emoji[] = await getPosts();
  return (
    <div className="flex flex-col w-full">
      <div className="flex border-b-2 border-black p-7">
        <AddPostForm />
      </div>
      {emojis.map((e) => (
        <div key={e.id} className="border-b-2 border-black p-7">{e.title}</div>
      ))}
    </div>
  );
}
