import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";

export const metadata: Metadata = {
    title: "Gabriele Rossi",
    description: "Gabriele's personal portfolio",
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
        <html lang="en" className="dark-flow-bg">
            <body
                className={`${nunito.className} m-0 p-0`}
                suppressHydrationWarning
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
