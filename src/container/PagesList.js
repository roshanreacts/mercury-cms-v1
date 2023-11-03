import React, { useEffect } from "react";
import store from "~/store";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useLazyQuery } from "./hooks";
import { GET_ALL_PAGES } from "~/utilis/queries";

const PageList = ({ currentWebsite }) => {
  const [callPagesToStore, { loading, error, data }] = useLazyQuery(store.getAllPages);
  useEffect(() => {
      callPagesToStore(GET_ALL_PAGES, {
        where: {
          website: {
            is: currentWebsite
          }
        }
      }, { cache: "no-store" })

    return () => {
      console.log("cleanup");
    };
  }, []);

  useEffect(()=>{
    if(error){

    }
  },[data, loading, error])

  return (
    <>

      {
        loading ?
          <><h1 className="text-white">loading....</h1></>
          :
          store.pages.map((page, index) => (
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
