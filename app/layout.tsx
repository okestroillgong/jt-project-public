import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "친애저축은행",
  description: "친애저축은행 내부 관리 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-center" 
          toastOptions={{
            classNames: {
              success: 'bg-green-50 border-green-200 text-green-800',
              warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
              error: 'bg-red-50 border-red-200 text-red-800',
            },
          }}
        />
      </body>
    </html>
  );
}
