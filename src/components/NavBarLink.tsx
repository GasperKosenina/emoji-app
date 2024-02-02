'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavBarLink({ href, children }: NavLinkProps) {

  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link href={href}>
      <span className={`text-slate-300 hover:text-slate-900 mx-2 ${isActive ? 'underline' : ''}`}>
        {children}
      </span>
    </Link>
  )
}

