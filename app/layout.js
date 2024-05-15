import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
export const metadata = {
  title: "Qwikk Returns",
  description: "#1 Platform for Commercial Properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
       <div> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
