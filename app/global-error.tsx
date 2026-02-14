"use client";

import { ServerCrash, RefreshCcw } from "lucide-react";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
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
        <html lang="it" suppressHydrationWarning>
            <body
                className={`${montserrat.className} m-0 p-0 bg-neutral-background text-main-text overflow-x-hidden`}
            >
                <div
                    className="flex flex-col items-center justify-center min-h-screen px-4 text-center"
                    style={{
                        backgroundColor: "var(--neutral-background, #0a0a0a)",
                        color: "var(--main-text, #ffffff)",
                    }}
                >
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse rounded-full"></div>
                        <div className="relative z-10 w-24 h-24 rounded-full bg-main-background border border-red-500/30 flex items-center justify-center shadow-2xl">
                            <ServerCrash size={48} className="text-red-500" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-main-text">
                        Errore Critico di Sistema
                    </h1>

                    <p className="text-gray-400 max-w-lg mx-auto mb-8 text-lg leading-relaxed">
                        L&apos;app ha smesso di funzionare
                    </p>

                    {error.digest && (
                        <div className="mb-8 p-3 bg-red-950/30 border border-red-900/50 rounded text-red-200 font-mono text-xs">
                            Error Digest: {error.digest}
                        </div>
                    )}

                    <button
                        onClick={() => reset()}
                        className="
                            flex items-center gap-3 px-8 py-4
                            bg-red-600 hover:bg-red-700
                            text-white font-bold text-lg
                            rounded-xl
                            shadow-[0_0_20px_rgba(220,38,38,0.4)]
                            hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
                            hover:scale-105
                            active:scale-95
                            transition-all duration-300
                            cursor-pointer
                        "
                    >
                        <RefreshCcw size={20} className="animate-spin-slow" />
                        Riavvia Applicazione
                    </button>

                    <p className="mt-12 text-sm text-gray-600">
                        Se il problema persiste, invia un feedback e facci sapere il problema.
                    </p>
                </div>
            </body>
        </html>
    );
}
