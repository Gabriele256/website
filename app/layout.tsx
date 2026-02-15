import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";
import BackgroundBlobs from "./_components/background/BackgroundBlobs";

export const metadata: Metadata = {
    title: "Gabriele Rossi",
    description: "Gabriele's personal portfolio",
    icons: {
        icon: "/icon.svg",
    },
};

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${nunito.className} m-0 p-0`}
                suppressHydrationWarning
            >
                <BackgroundBlobs />
                <main className="w-full h-full grow flex flex-col min-h-screen">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </main>
            </body>
        </html>
    );
}
