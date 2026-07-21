import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "Nimelssa LAUTECH CHAPTER",
  description: "Nigerian Medical Laboratory Science Students' Association, LAUTECH Chapter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
