import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";

const ManropeSans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Culinary Craft",
  description:
    "CulinaryCraft AI is an intelligent recipe generator that helps users turn available ingredients into delicious dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ManropeSans.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
