import Header from "@/components/ui/shared/Header";
import Sidebar from "@/components/ui/shared/Sidebar";
import { ClerkLoaded, ClerkProvider, SignedIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";
import Footer from "@/components/ui/shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "Custom metadata for my blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,

        elements: {
          buttonPrimary: {
            backgroundColor: "#1D4ED8",
            color: "#FFFFFF",
            padding: "10px 20px",
            borderRadius: "4px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#1A41A5",
            },
          },
        },
      }}
    >
      <html lang="en" suppressHydrationWarning className="dark">
        <body
          className={`${inter.className} flex flex-col min-h-screen justify-start items-start`}
        >
          <ClerkLoaded>
            <Header />
            <div className="flex  w-full ">
              <div className="flex md:w-[200px]">
                <SignedIn>
                  <Sidebar />
                </SignedIn>
              </div>
              <main className="flex-1">{children}</main>
            </div>
            <Footer />
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
