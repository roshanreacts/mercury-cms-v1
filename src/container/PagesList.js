import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import store from "~/app/store";
import { observer } from "mobx-react-lite";

const PageList = () => {
  const params = useParams();
  useEffect(() => {
    (async () => {
      console.log("mounted");
      const data = store.getAllPages(params.webSiteId);

      console.log(data);
    })();
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div
      className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
      id="submenu"
    >
      {store.pages.map((page) => (
        <h1
          key={page.id}
          className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
        >
          {page.title}
        </h1>
      ))}
    </div>
  );
};

export default observer(PageList);