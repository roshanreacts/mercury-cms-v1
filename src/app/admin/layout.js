import { Inter } from "next/font/google";
import MTWrapper from "../../container/MTWrapper";
import SideBar from "~/components/SideBar";
import Navbar from "~/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mercury CMS Admin",
  description: "Generated by mercury-js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <MTWrapper> */}
        <div className="flex flex-col align-baseline h-[88vh] bg-gray-100">
          <div>
            <Navbar />

          </div>
          <div className="flex-1 flex justify-evenly min-h-[-webkit-fill-available]">
            <div className="h-full">
              <SideBar />

            </div>
            <div className="flex-1 overflow-y-scroll ml-3 mt-2">
              {children}

            </div>
          </div>

        </div>

        {/* </MTWrapper> */}
      </body>
    </html>
  );
}
