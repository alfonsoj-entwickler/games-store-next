import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header className="py-20 px-10 bg-center bg-cover bg-[url('/images/header_img.jpg')]">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logos/logo.svg" alt="logo" width={100} height={40} /> 
                </Link>
                <nav className="flex gap-5 text-xl">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/we">
                        About us
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                    <Link href="/store">
                        Store
                    </Link>
                </nav>
            </div>
            
        </header>
    )
}