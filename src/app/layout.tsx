import { Providers } from "../components/providers";
import { Toaster } from "@/components/ui/toaster";

// import { inter, roboto, manrope } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Synergy",
  description: "Most Popular peer to peer Leading Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white overflow-y-hidden">
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
