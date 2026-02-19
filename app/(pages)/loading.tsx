import Image from "next/image";

export default function Loading() {
    return (
        <div className="z-999 w-screen h-screen fixed top-0 left-0 bg-[#0f0a18] flex flex-col items-center justify-center gap-8 overflow-hidden">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-40 h-40 rounded-full border border-purple-500/20 animate-[ping_2s_ease-in-out_infinite]" />
                <div className="absolute w-32 h-32 rounded-full border border-purple-500/10 animate-[ping_2s_ease-in-out_0.5s_infinite]" />

                <div className="relative w-20 h-20 animate-[pulse_2s_ease-in-out_infinite]">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        fill
                        className="object-contain drop-shadow-[0_0_20px_rgba(193, 131, 252)]"
                        priority
                    />
                </div>
            </div>

            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-[loading-bar_1.5s_ease-in-out_infinite]" />
            </div>
        </div>
    );
}
