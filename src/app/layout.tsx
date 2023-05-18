import { Providers } from "./appComponents/providers";
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
