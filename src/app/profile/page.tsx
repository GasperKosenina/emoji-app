import { UserButton } from "@clerk/nextjs";
export default async function Profile() {
  return (
    <div className="flex w-full">
      My Profile
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
