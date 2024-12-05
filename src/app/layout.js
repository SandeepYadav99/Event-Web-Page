"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Notification from "@/components/ui/notification";
import { Provider, useSelector } from "react-redux";
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

const NotificationComponent = () => {
  const notification = useSelector((state) => state.notification.notifications);
  if (!notification) return null;
  const { title, message, status } = notification ;

  return <Notification title={title} message={message} status={status} />;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider store={store}>
          <Header />
          {children}
          <NotificationComponent />
        </Provider>
      </body>
    </html>
  );
}
