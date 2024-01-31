'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const linkStyle = (path: string) => {
    return pathname === path ? "underline" : "";
  };

  return (
    <nav className="flex justify-between h-14 max-w-screen-md mx-auto p-4 items-center border-x-2 border-b-2 border-black">
      <Link href="/">
        <span className={`text-slate-300 hover:text-slate-900 mx-2 ${linkStyle('/')}`}>
          Feed
        </span>
      </Link>
      <Link href="/about">
        <span className={`text-slate-300 hover:text-slate-900 mx-2 ${linkStyle('/about')}`}>
          Profile
        </span>
      </Link>
    </nav>
  );
}
