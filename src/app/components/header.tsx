"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();

    return (
        <div className="text-center flex flex-row fixed w-full shadow-lg bg-[#ffffff34] backdrop-blur-md items-center z-[20]">
            <div className="p-2">
                <img src="/dylogo.png" alt="Logo" width="50px" height="50px" />
            </div>
            <div className="flex flex-row justify-center items-center absolute right-5">
                <nav className="text-sm border border-[#426cf861] bg-[white] p-2 pl-5 pr-5 rounded-full">
                    <ul className="flex flex-row gap-9 justify-center font-semibold">
                        <li><Link href="/" className={`nav-link ${pathName === "/" ? "text-blue-600" : "text-neutral-500"}`}>Home</Link></li>
                        <li><Link href="/about" className={`nav-link ${pathName === "/about" ? "text-blue-600" : "text-neutral-500"}`}>AboutUs</Link></li>
                        {/* <li><Link href="/company" className={`nav-link ${pathName === "/company" ? "text-blue-600" : "text-neutral-500"}`}>Company</Link></li> */}
                        <li><Link href="/contact" className={`nav-link ${pathName === "/contact" ? "text-blue-600" : "text-neutral-500"}`}>ContactUs</Link></li>
                    </ul>
                </nav>
                <button className="btn">Lets Start</button>
            </div>
        </div>
    );
}
