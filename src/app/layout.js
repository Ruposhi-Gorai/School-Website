import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./Components/common/MainLayout";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
