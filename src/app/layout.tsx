import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import MainNav from "@/components/main-nav";

// const roboto = Noto_Sans({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Mohamed Mahran - Full Stack Developer",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {/* <MainNav /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
