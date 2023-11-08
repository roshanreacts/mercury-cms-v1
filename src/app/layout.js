import "./globals.css";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  loadDevMessages();
  loadErrorMessages();
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
