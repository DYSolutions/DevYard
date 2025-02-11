"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { use } from "react";

export default function Header() {
    const pathName = usePathname();

    return (
        <div className="text-center flex flex-row fixed w-full shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md items-center z-[5]">
            <div className="p-2">
                <img src="/dylogo.png" alt="Logo" width="50px" height="50px" />
            </div>
            <div className="flex flex-row justify-center items-center absolute right-5">
                <nav className="text-sm border border-[#7042f861] bg-[#0300145e] p-2 pl-5 pr-5 rounded-full">
                    <ul className="flex flex-row gap-9 justify-center font-semibold">
                        <li><Link href="/" className={`nav-link ${pathName === "/" ? "text-white" : "text-neutral-500"}`}>Home</Link></li>
                        <li><Link href="/about" className={`nav-link ${pathName === "/about" ? "text-white" : "text-neutral-500"}`}>AboutUs</Link></li>
                        <li><Link href="/company" className={`nav-link ${pathName === "/company" ? "text-white" : "text-neutral-500"}`}>Company</Link></li>
                        <li><Link href="/contact" className={`nav-link ${pathName === "/contact" ? "text-white" : "text-neutral-500"}`}>ContactUs</Link></li>
                    </ul>
                </nav>
                {/* <button className="btn">Lets Start</button> */}
            </div>
        </div>
    );
}
