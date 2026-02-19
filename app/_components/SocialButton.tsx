import Link from "next/link";

export default function SocialButton({
    icon,
    name,
    href,
}: {
    icon: React.ReactNode;
    name?: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            title={name}
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white transition-all hover:scale-105 flex flex-row items-center justify-center gap-4"
        >
            {icon} {name}
        </Link>
    );
}
