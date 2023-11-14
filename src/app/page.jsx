import React from 'react';
import * as Components from '../components';
import ObjReact from '../utilities/DynamicComponent';
import { generateCompoLib, generateComponentList } from '../utilities/methods';
import componentJson from '../utilities/ComponentData.json';
import store from '~/store';
import { GET_PAGE } from '~/utilis/queries';
import { convertBASE64toJSON } from '~/utilis/utilMethods';
import { redirect } from 'next/navigation';


const page = async () => {

  const data = await store.getPageBySlug(GET_PAGE, { where: { slug: { is: "home" } } }, { cache: "no-store" });
  if(!data){
    redirect('/404');
  }
  const slugMapping = JSON.parse(convertBASE64toJSON(data?.components));

  return (
    <div className="flex justify-center items-center">
      <div className="flex min-h-screen flex-col items-center max-w-screen-2xl justify-center">
        <ObjReact objReact={{
          path: `/`,
          component: [
            {
              component: "Navbar",
              props: {
                ...componentJson[0].props,
                active: "home"
              },
              children: null
            },
            ...generateComponentList(slugMapping),
            {
              component: "Footer",
              children: null,
              props: componentJson[1].props
            },
            {
              component: "MoveToUp",
              children: null
            }
          ],
          compoLib: {
            ...generateCompoLib(Components, slugMapping),
            "Navbar": Components.Navbar,
            "Footer": Components.Footer,
            "MoveToUp": Components.MoveToUp
          }
        }} />
      </div>
    </div>
  )
}

export default page
