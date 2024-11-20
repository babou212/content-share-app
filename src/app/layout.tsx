import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import NavBar from "~/components/navbar";

import { AppInsightsProvider } from "..//components/azureApplicationInsights";

export const metadata: Metadata = {
  title: "Content Share Application",
  description: "Content Share website for sharing blog content",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
      <AppInsightsProvider>
       <div className="overflow-auto w-full">
          <NavBar />
          <main className="min-h-screen bg-gray-100 dark:bg-gray-900">{children}</main>
        </div>
      </AppInsightsProvider>
      </body>
    </html>
  );
}
