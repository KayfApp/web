import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/navigation/header";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Footer from "@/components/layout/navigation/footer";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kayf.app",
    description: "Intelligent note-taking, enterprise search & automation platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.className} flex flex-col min-h-screen relative`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <Header />
                        {children}
                        <Separator />
                        <Footer />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html >
    );
}
