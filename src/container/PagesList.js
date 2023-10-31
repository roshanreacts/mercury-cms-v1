import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import store from "~/app/store";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const PageList = ({ currentWebsite }) => {
  const params = useParams();
  useEffect(() => {
    (async () => {
      console.log("mounted");
      const data = store.getAllPages(params.webSiteId);

      console.log(data);
      // const data1 = store.getPage(1);
      // console.log(data1);

    })();
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <>

      {
        store.pages.loading ?
          <><h1 className="text-white">loading....</h1></>
          :
          store.pages.data.map((page, index) => (
            <Link href={`/admin/${currentWebsite}/page/${page.id}?edit=false`} key={index}>
              <div
                className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
                id="submenu"
              >

                <h1
                  key={page.id}
                  className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                >
                  {page.title}
                </h1>

              </div>
            </Link>
          ))
      }
    </>


  );
};

export default observer(PageList);
