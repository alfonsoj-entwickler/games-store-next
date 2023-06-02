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
          <Link
            href="/basket"
            className={`p-2 font-semibold transition-all hover:bg-sky-700 ${pathname === "/basket" && "bg-sky-700"}`}
          >
            <span className="w-[2rem] h-[2rem]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-[2rem] h-[2rem]">
                  <path
                      d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" fill="currentColor" />
              </svg>
            </span>
            
          </Link>
        </nav>
      </div>
    </header>
  );
}
