"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GlassSurface from "@/app/_components/GlassSurface/GlassSurface";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "My Projects" },
    { href: "/contacts", label: "Contact Me" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="text-white sticky top-4 left-0 z-25 m-4">
            <GlassSurface
                width={"100%"}
                height={55}
                borderRadius={30}
                className="z-100 flex items-center justify-center"
            >
                {/* desktop */}
                <nav className="hidden md:flex items-center justify-center gap-8 text-xl">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover-border-animated cursor-pointer z-2 ${
                                pathname === link.href
                                    ? "text-white"
                                    : "text-white/40"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* mobile */}
                <div className="flex md:hidden items-center justify-between w-full px-6">
                    <Link href="/" className="font-bold text-lg">
                        Gabriele
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </GlassSurface>

            {/* mobile list */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-out absolute w-full z-25 ${
                    isOpen
                        ? "max-h-80 opacity-100 mt-2"
                        : "max-h-0 opacity-0 mt-0"
                }`}
            >
                <GlassSurface
                    width={"100%"}
                    height={""}
                    borderRadius={20}
                    className="z-100"
                    simple
                    childrenClassName="flex flex-col w-full"
                >
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`px-6 py-3.5 text-lg font-medium transition-colors border-b border-white/5 last:border-b-0 ${
                                pathname === link.href
                                    ? "text-white bg-white/5"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </GlassSurface>
            </div>
        </header>
    );
}
