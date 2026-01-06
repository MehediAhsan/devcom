import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevCom — Dev Community",
  description: "Job board and posts for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        <header className="border-b bg-white/60 backdrop-blur sticky top-0 z-30">
          <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold">
              DevCom
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/jobs" className="rounded-md px-3 py-2 hover:bg-zinc-100">
                Jobs
              </Link>
              <Link href="/posts" className="rounded-md px-3 py-2 hover:bg-zinc-100">
                Posts
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
