import GlassSurface from "../GlassSurface/GlassSurface";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function GetInTouch() {
    return (
        <section className="w-[90vw] md:w-[75vw] max-w-6xl mb-12 animate-fade-in-up animate-delay-3">
            <GlassSurface
                width={"100%"}
                height={""}
                className="p-10"
                simple
                childrenClassName="flex flex-col items-center gap-6 w-full h-full text-center"
            >
                <SparklesIcon size="2rem" className="text-purple-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-white/40">
                    Wanna contact me?
                </h2>
                <Link
                    href="/contacts"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                            bg-linear-to-r from-purple-600 to-pink-600
                            hover:from-purple-500 hover:to-pink-500
                            text-white font-semibold text-lg
                            transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                    Get in Touch
                    <ArrowRightIcon size="1.1em" />
                </Link>
            </GlassSurface>
        </section>
    );
}
