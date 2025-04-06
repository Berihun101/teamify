"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className=" bg-transparent px-4 py-8">
        <div className="container mx-auto flex justify-between items-center">
           <Link href='/' >
            <Image
                src="/images/Teamify - 1 - Logo Name White Orange I 1.png"
                alt="Logo"
                width={100}
                height={50}
                className="h-10 w-auto"
            />
            </Link>
          
            
            <div className="space-x-24 lg:flex hidden">
            <Link href="/" className="text-gray-300 hover:border-b-2 hover:text-white">Home</Link>
            <Link href="/features" className="text-gray-300 hover:border-b-2 hover:text-white">Features</Link>
            <Link href="/aboutUs" className="text-gray-300 hover:border-b-2 hover:text-white">About Us</Link>

            <Link href="/contactUs" className="text-gray-300 hover:border-b-2 hover:text-white">Contact Us</Link>
            </div>

           <button onClick={() =>{router.push('/signin')}} className="bg-yellow-400 cursor-pointer font-bold text-white px-4 py-2 rounded hover:bg-yellow-600">
            Sign in
           </button>
        </div>
        </nav>
    );
    }
export default Navbar;