
import Navbar from "~/components/Navbar";
import SideBar from "~/components/SideBar";
import InitialNavigation from "~/container/InitialNavigation";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Navbar />

      <div className="flex-1 flex">
        <div>
          <SideBar />
        </div>

        <div className="flex-1 ml-3 mt-2" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 80px)' }}>
          <InitialNavigation logoPresent={false} fromLayout={true}/>

          {children}
        </div>
      </div>
    </div>
  );
}
