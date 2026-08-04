import type { Metadata } from "next";
import { Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/redux/provider";
import MobileSideMenu from "@/components/MobileSideMenu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const signatureFont = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Nimzii | Kaveen Nimsara - CS Undergraduate & Developer",
  description:
    "Personal portfolio of Kaveen Nimsara (Nimzii), a Computer Science undergraduate from Sri Lanka passionate about building clean, modern web apps with React, Next.js & TypeScript.",
  keywords: [
    "Nimzii",
    "Kaveen Nimsara",
    "Portfolio",
    "Computer Science",
    "Sri Lanka",
    "React Developer",
    "Next.js Developer",
    "Full-Stack",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${signatureFont.variable}`} style={{ colorScheme: "dark" }}>
      <body className={`${inter.className} min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-sky-400 selection:text-slate-950`}>
        <div className="mesh-bg" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            forcedTheme="dark"
            enableSystem={false}
          >
            <div className="relative flex flex-col min-h-screen">
              <NavBar />
              <MobileSideMenu />
              <main className="flex-1 max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-24 pb-16">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
