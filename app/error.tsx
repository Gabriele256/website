"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import GlassSurface from "@/app/_components/GlassSurface/GlassSurface";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

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
                    <AlertTriangle
                        size={64}
                        className="text-purple-400 relative z-10 animate-pulse"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-white/40">
                        Oops!
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-white/90">
                        Something went wrong
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto">
                        An unexpected error occurred. Don&apos;t worry, it
                        happens to the best of us!
                    </p>
                    {error.digest && (
                        <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/40">
                            Error ID: {error.digest.slice(0, 8)}
                        </div>
                    )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                        onClick={() => reset()}
                        className="
                            group flex items-center justify-center gap-2
                            px-8 py-3 rounded-full
                            bg-linear-to-r from-purple-600 to-pink-600
                            hover:from-purple-500 hover:to-pink-500
                            text-white font-semibold
                            transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                        "
                    >
                        <RefreshCcw
                            size={18}
                            className="group-hover:rotate-180 transition-transform duration-500"
                        />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="
                            flex items-center justify-center gap-2
                            px-8 py-3 rounded-full
                            bg-white/5 border border-white/10
                            hover:bg-white/10 hover:border-white/20
                            text-white font-semibold
                            transition-all duration-300 hover:scale-105
                        "
                    >
                        <Home size={18} />
                        Go Home
                    </Link>
                </div>
            </GlassSurface>
        </div>
    );
}
