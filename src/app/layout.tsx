import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterWrapper from "@/components/FooterWrapper";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Culinique | The Art of the Table",
  description: "A cinematic epicurean experience. Crafted with passion, served with soul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
