import "./globals.css";
import { dmSans } from "@/utils/Fonts";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar";
import GlobalState from "@/context/GlobalContext";

export const metadata = {
  title: "GrowwStonks",
  description: "A Broking Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-[#f0f0f0] dark:bg-black`}>
        <GlobalState>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
          </ThemeProvider>
        </GlobalState>
      </body>
    </html>
  );
}
