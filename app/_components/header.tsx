import Link from "next/link";
import GlassElement from "./glassElement/glassElement";

export default function Header() {
    return (
        <header className="text-white">
            <GlassElement className="w-[calc(100%_-_2em)] h-12 m-4 z-100">
                <nav className="flex items-center justify-center gap-8 text-xl">
                    <Link
                        href="/"
                        className="hover-border-animated cursor-pointer z-2"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="hover-border-animated cursor-pointer z-2"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="hover-border-animated cursor-pointer z-2"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contacts"
                        className="hover-border-animated cursor-pointer z-2"
                    >
                        Contacts
                    </Link>
                </nav>
            </GlassElement>
        </header>
    );
}
