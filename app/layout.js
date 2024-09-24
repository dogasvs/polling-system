import localFont from "next/font/local";
import "./globals.css";
import Sidenav from "./components/sidenav/page";
import Header from "./components/header/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Sidenav />
        <div className="main-layout">
          <Header /> 
          <main className="content">{children}</main> 
        </div>
      </body>
    </html>
  );
}
