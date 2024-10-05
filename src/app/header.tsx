import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import logoImage from "./public/logo.png";
import Contact from "./contact/page";
import Recipe from "./recipe/page";
function Header(){
    return(
        <main className="container mx-auto px-4 font-custom mt-4">
        <header className="flex justify-between border-b-2 border-black">
        
            <Image className="items-center" src={logoImage} alt="logo" width={50} height={50} />
            
            <nav className="">
                <ul className="flex flex-row sm:flex-cols sm:space-x-10 text-blackish ">
                    <li className="hover:text-lg"><Link href="/">HOME</Link></li>
                    <li className="hover:text-lg"><Link href="/recipe">RECIPIES</Link></li>
                    <li className="hover:text-lg"><Link href="contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    </main>
    
    )
}

export default Header;