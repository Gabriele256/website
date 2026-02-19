"use client";

import Link from "next/link";
import { HelpCircle, Home } from "lucide-react";
import GlassSurface from "@/app/_components/GlassSurface/GlassSurface";

export default function NotFound() {
    return (
        <div className="w-full h-screen flex items-center justify-center p-4">
            <GlassSurface
                width={"100%"}
                height={"fit-content"}
                className="max-w-2xl p-8 md:p-12"
                simple
                childrenClassName="flex flex-col items-center text-center gap-8"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
                    <HelpCircle
                        size={64}
                        className="text-purple-400 relative z-10 animate-pulse"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-white/40">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-white/90">
                        Page Not Found
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto">
                        The page you are looking for doesn&apos;t exist or has
                        been moved.
                    </p>
                </div>

                <Link
                    href="/"
                    className="
                        flex items-center justify-center gap-2
                        px-8 py-3 rounded-full
                        bg-linear-to-r from-purple-600 to-pink-600
                        hover:from-purple-500 hover:to-pink-500
                        text-white font-semibold
                        transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                    "
                >
                    <Home size={18} />
                    Back (Home)
                </Link>
            </GlassSurface>
        </div>
    );
}
