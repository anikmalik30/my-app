import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "./(home)/components/Nav";
import Cursor from "@/components/Cursor";
// import smoothscroll from 'smoothscroll-polyfill';

// if (typeof window !== 'undefined') {
//   smoothscroll.polyfill();
// }

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),

  title: "Anik Malik",
  authors: {
    name: "Anik Malik",
  },
  description: "this is he sample Meta Description",
  openGraph: {
    title: "anikmalik",
    description: "this is he sample Meta Description",
    url: "https://localhost:3000",
    siteName: "anikmalik",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "Web Developer",
    "React",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
      <Cursor/>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Nav />
        {/* <Footer/> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
