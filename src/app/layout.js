"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Notification from "@/components/ui/notification";
import { Provider } from "react-redux";
import { store } from "@/store/index";

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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <Header />
          {children}
          <Notification
            title={"Test"}
            message="This is Test"
            status="pending"
          />
        </Provider>
      </body>
    </html>
  );
}
