import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";

// import { inter, roboto, manrope } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Synergy",
  description: "MOst Popular peer to peer Leading Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* className={manrope.className}> */}
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
