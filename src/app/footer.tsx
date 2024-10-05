import Image from "next/image";
import Link from "next/link";
import logo from "./public/logo.png";

function Footer(){
    return(
        <main>
        <div className="flex flex-col">
            <div className="h-auto mt-10 pl-10 pr-10 pb-10 pt-7 bg-[#fdcf5b] flex flex-col md:flex-row justify-between font-custom">
                <div className="flex flex-col items-start mb-5 md:mb-0">
                    <Image src={logo} width={65} height={65} alt="logo" />
                    <p className="container w-full md:w-96 h-auto text-sm mt-3">
                        Welcome to our Pakistani food recipes website, where the vibrant flavors of Pakistan come to life! Each recipe is crafted with love, bringing together rich spices and fresh ingredients that reflect the diverse culinary heritage of our country.
                    </p>
                </div>
    
                <div className="flex flex-col md:flex-row gap-10">
                    <ul aria-label="Main Navigation" className="flex-1">
                        <h3 className="mb-3 font-bold">Pakistan or Khany</h3>
                        <li className="text-sm">Home</li>
                        <li className="text-sm">Recipes</li>
                        <li className="text-sm">Contact</li>
                    </ul>
    
                    <ul aria-label="Legal Information" className="flex-1">
                        <h3 className="mb-3 font-bold">Legal</h3>
                        <li className="text-sm">Terms</li>
                        <li className="text-sm">Conditions</li>
                        <li className="text-sm">Cookies</li>
                        <li className="text-sm">Copyright</li>
                    </ul>
    
                    <ul aria-label="Follow Us" className="flex-1">
                        <h3 className="mb-3 font-bold">Follow</h3>
                        <li className="text-sm"><a href="https://facebook.com">Facebook</a></li>
                        <li className="text-sm"><a href="https://instagram.com">Instagram</a></li>
                        <li className="text-sm"><a href="https://twitter.com">Twitter</a></li>
                        <li className="text-sm"><a href="https://tiktok.com">TikTok</a></li>
                    </ul>
                </div>
            </div>
    
            <div className="w-full h-8 bg-white">
                <div>
                    <p className="mt-4 ml-2 text-sm text-left pl-2 pb-2">@ 2024 Pakistan and Khany - All rights reserved</p>
                </div>
            </div>
        </div>
    </main>
    
    )
}

export default Footer;