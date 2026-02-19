import GithubProjects from "@/app/_components/GithubProjects/GithubProjects";
import GetInTouch from "@/app/_components/CTA/GetInTouch";
import HeroSection from "@/app/_components/sections/HeroSection";
import ScrollReveal from "@/app/_components/ScrollReveal";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-full min-h-screen p-4 flex flex-col items-center gap-6">
            <HeroSection>
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-white/40 animate-fade-in-up">
                    My Projects
                </h1>
                <p className="text-lg text-white/60 leading-relaxed max-w-xl animate-fade-in-up animate-delay-1">
                    A collection of things I&apos;ve built. Everything is from
                    my GitHub.
                </p>
                <Link
                    href="https://github.com/Gabriele256/"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                        bg-white/5 border border-white/10
                        hover:bg-white/10 hover:border-white/20
                        text-white font-medium text-sm
                        transition-all duration-300 hover:scale-105
                        animate-fade-in-up animate-delay-2"
                >
                    <FaGithub size={18} />
                    View on GitHub
                </Link>
            </HeroSection>

            <ScrollReveal className="w-[90vw] md:w-[75vw] max-w-6xl">
                <GithubProjects />
            </ScrollReveal>

            <ScrollReveal>
                <GetInTouch />
            </ScrollReveal>
        </div>
    );
}
