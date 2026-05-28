import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/redux/provider";
import MobileSideMenu from "@/components/MobileSideMenu";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaveen Nimsara",
  description: "Personal portfolio of Kaveen Nimsara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <div className="mesh-bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              <div className="flex flex-col min-h-screen">
                <NavBar />
                <div className="flex-1 flex">
                  <div className="hidden lg:block">
                    <SideBar />
                  </div>
                  <MobileSideMenu />
                  <div className="flex-1 p-4 pt-10 md:p-10 lg:ml-60 ml-0 mt-10 lg:mt-0 main-content">
                    <div className="min-h-screen">{children}</div>
                    <div className="mt-10 md:mt-20">
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
