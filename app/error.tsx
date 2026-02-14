"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03] pointer-events-none z-0">
                <span className="text-[15rem] font-black text-main-text">
                    ERROR
                </span>
            </div>

            <div className="relative z-10 text-center max-w-lg mx-auto animate-slide-up">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neutral-background mb-6">
                    <AlertTriangle
                        size={40}
                        className="text-base-red"
                    />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-main-text mb-3">
                    Qualcosa è andato storto!
                </h2>

                <p className="text-tertiary-text text-base mb-2 leading-relaxed">
                    Si è verificato un errore inaspettato durante il caricamento
                    della pagina. Non preoccuparti, spesso basta ricaricare.
                </p>

                {error.digest && (
                    <p className="text-xs font-mono text-tertiary-text opacity-60 mb-8 bg-neutral-background inline-block px-2 py-1 rounded">
                        Error Digest: {error.digest}
                    </p>
                )}
                {!error.digest && <div className="mb-8" />}

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => reset()}
                        className="
                            w-[50%] h-16
                            flex items-center justify-evenly px-6 py-3 
                            rounded-secondary
                            bg-base-red 
                            text-white 
                            font-semibold 
                            shadow-[0_4px_15px_rgba(197,24,33,0.2)] 
                            hover:bg-[#a9151c] 
                            hover:translate-y-[-2px] 
                            hover:shadow-[0_6px_20px_rgba(197,24,33,0.3)] 
                            transition-all duration-300
                        "
                    >
                        <RefreshCcw size={18} />
                        Riprova a caricare
                    </button>

                    <Link
                        href="/"
                        className="
                            w-[50%] h-16
                            flex items-center justify-evenly px-6 py-3
                            rounded-secondary
                            text-main-text
                            font-semibold
                            bg-neutral-background
                            shadow-[0_4px_15px_rgba(0,0,0,0.2)]
                            hover:translate-y-[-2px] 
                            hover:bg-main-background
                            transition-all duration-300
                        "
                    >
                        <Home size={18} />
                        Torna alla Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
