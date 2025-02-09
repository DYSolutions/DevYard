"use client"

import Link from "next/link"
import "./btnStyles.css"
import { usePathname } from "next/navigation";
import { use } from "react";

export default function Header() {
    const pathName = usePathname();

    return (
        <div className="text-center flex flex-row border-b border-neutral-800 items-center">
            <div className="p-2">
                <img src="/dylogo.png" alt="Logo" width="60px" height="60px" />
            </div>
            <div className="flex flex-row justify-center items-center absolute right-5">
                <nav className="text-sm">
                    <ul className="flex flex-row gap-9 justify-center font-semibold">
                        <li><Link href="/" className={`nav-link ${pathName === "/" ? "text-white" : "text-neutral-500"}`}>Home</Link></li>
                        <li><Link href="/about" className={`nav-link ${pathName === "/about" ? "text-white" : "text-neutral-500"}`}>AboutUs</Link></li>
                        <li><Link href="/contact" className={`nav-link ${pathName === "/contact" ? "text-white" : "text-neutral-500"}`}>ContactUs</Link></li><li></li>
                    </ul>
                </nav>
                <button className="btn">Lets Start</button>
            </div>
        </div>
    );
}
