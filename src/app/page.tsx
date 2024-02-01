import prisma from "../../prisma";

interface Emoji {
  id: string
  title: string
}

export default async function Home() {
  const emojis: Emoji[] = await prisma.post.findMany()

  return (
    <div className="flex flex-col w-full">
      <div className="flex border-b-2 border-black p-7 justify-between">
        <input type='text' placeholder="Post emoji that describes your day..." className="grow outline-none bg-transparent w-full" />
        <button type="submit" >Post</button>
      </div>
      {emojis.map((e) => (
        <div key={e.id} className="border-b-2 border-black p-7">{e.title}</div>
      ))}
    </div>
  );
}
