"use client";

import { ServerCrash, RefreshCcw } from "lucide-react";
import { Nunito } from "next/font/google";
import "@/app/globals.css";

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
    display: "swap",
});

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en" className={`${nunito.variable} font-sans`}>
            <body className="bg-[#0f0a18] text-white overflow-hidden">
                <div className="w-full h-screen flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl flex flex-col items-center text-center gap-8 shadow-2xl">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                            <ServerCrash
                                size={64}
                                className="text-red-400 relative z-10 animate-pulse"
                            />
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-white/40">
                                Critical Error
                            </h1>
                            <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto">
                                The application encountered a critical error and
                                needs to restart.
                            </p>
                            {error.digest && (
                                <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300/80">
                                    Error ID: {error.digest.slice(0, 8)}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => reset()}
                            className="
                                group flex items-center justify-center gap-2
                                px-8 py-3 rounded-full
                                bg-linear-to-r from-red-600 to-pink-600
                                hover:from-red-500 hover:to-pink-500
                                text-white font-semibold
                                cursor-pointer
                                transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25
                            "
                        >
                            <RefreshCcw
                                size={18}
                                className="group-hover:rotate-180 transition-transform duration-500"
                            />
                            Restart Application
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
