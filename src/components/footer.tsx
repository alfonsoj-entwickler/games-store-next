import Link from "next/link"
export default function Footer() {
  return (
    <footer className="py-20 px-10 bg-green-500">
      <div className="flex max-w-7xl mx-auto flex-col lg:flex-row lg:justify-between lg:items-center">
        <nav className="flex gap-5 text-xl ">
          <Link href="/" className={`p-2 transition-all hover:bg-sky-700 font-semibold`}>
            Home
          </Link>
          <Link href="/we" className={`p-2 transition-all hover:bg-sky-700 font-semibold`}>
            About us
          </Link>
          <Link href="/blog" className={`p-2 transition-all hover:bg-sky-700 font-semibold`}>
            Blog
          </Link>
          <Link href="/store" className={`p-2 transition-all hover:bg-sky-700 font-semibold`}>
            Store
          </Link>
        </nav>
        <p className="px-2 my-5 font-semibold text-l">All rights reserved {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
