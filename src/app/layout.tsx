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
  title: "Muon VideoGames",
  description: "Blog and Store about video games",
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
        <main className="max-w-7xl mx-auto min-h-screen py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
