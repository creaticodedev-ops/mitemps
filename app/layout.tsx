import { CartProvider } from "components/cart/cart-context";
import { Cursor } from "components/brand/cursor";
import { Navbar } from "components/layout/navbar";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { getCart } from "lib/shopify";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { baseUrl } from "lib/utils";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "MI TEMPS",
    template: "%s — MI TEMPS",
  },
  description:
    "MI TEMPS par Oasis Group. Équipements professionnels et solutions complètes pour les espaces sportifs.",
  openGraph: {
    siteName: "MI TEMPS",
    title: "MI TEMPS",
    description:
      "Équipements professionnels et solutions pour clubs, académies et institutions.",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cart = getCart();

  return (
    <html
      lang="fr"
      className={`dark ${GeistSans.variable} ${instrument.variable}`}
    >
      <body className="overflow-x-clip bg-[#050505] font-sans text-[#f4f4f4] antialiased">
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <CartProvider cartPromise={cart}>
          <Cursor />
          <Navbar />
          <main id="contenu">{children}</main>
          <Toaster
            closeButton
            theme="dark"
            toastOptions={{
              style: {
                background: "#111111",
                color: "#f4f4f4",
                border: "1px solid rgba(255,255,255,0.12)",
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
