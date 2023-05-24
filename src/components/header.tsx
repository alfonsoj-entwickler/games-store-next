"use client";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-20 px-10 bg-center bg-cover bg-[url('/images/header_img.jpg')]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logos/logo.svg" alt="logo" width={100} height={40} />
        </Link>
        <nav className="flex gap-5 text-xl">
          <Link href="/" className={`p-2 font-semibold transition-all hover:bg-sky-700 ${pathname === "/" && "bg-sky-700"}`}>
            Home
          </Link>
          <Link href="/we" className={`p-2 font-semibold transition-all hover:bg-sky-700 ${pathname === "/we" && "bg-sky-700"}`}>
            About us
          </Link>
          <Link
            href="/blog"
            className={`p-2 font-semibold transition-all hover:bg-sky-700 ${pathname === "/blog" && "bg-sky-700"}`}
          >
            Blog
          </Link>
          <Link
            href="/store"
            className={`p-2 font-semibold transition-all hover:bg-sky-700 ${pathname === "/store" && "bg-sky-700"}`}
          >
            Store
          </Link>
        </nav>
      </div>
    </header>
  );
}
