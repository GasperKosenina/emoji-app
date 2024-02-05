import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavBarLink from "./NavBarLink";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-14 max-w-screen-md mx-auto p-4 items-center border-x-2 border-b-2 border-black">
      <NavBarLink href="/">feed</NavBarLink>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
}
