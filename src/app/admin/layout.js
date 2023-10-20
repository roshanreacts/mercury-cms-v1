import { Inter } from "next/font/google";
import MTWrapper from "~/container/MTWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mercury CMS Admin",
  description: "Generated by mercury-js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MTWrapper>{children}</MTWrapper>
      </body>
    </html>
  );
}
