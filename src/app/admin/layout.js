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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="flex-1 flex">
        <div>
          <SideBar />
        </div>

        <div className="flex-1 overflow-y-scroll ml-3 mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
