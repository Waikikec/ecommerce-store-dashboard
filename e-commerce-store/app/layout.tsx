import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import ModalProvider from "./providers/modal-provider";
import ToastProvider from "./providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
