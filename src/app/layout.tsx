import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Outfit({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Games Store",
  description: "Games Store with next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
