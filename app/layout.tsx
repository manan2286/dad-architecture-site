
import "./globals.css";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

export const metadata = {
  title: "Khanna Architects",
  description: "Architecture & Urban Design Studio — Delhi, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <TopNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
