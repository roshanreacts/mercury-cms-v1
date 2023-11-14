import React from 'react'
import * as Components from '~/components';
import ObjReact from '../../../utilities/DynamicComponent';
import componentJson from '../../../utilities/ComponentData.json';
import { generateCompoLib, generateComponentList } from '../../../utilities/methods';
import store from '~/store';
import { GET_PAGE } from '~/utilis/queries';
import { convertBASE64toJSON } from '~/utilis/utilMethods';
import { redirect } from 'next/navigation';

const page = async ({ params }) => {

  const subPath = params.subPath;
  const mainPath = params.mainPath;
  const slug = mainPath + "-" + subPath;
  const data = await store.getPageBySlug(GET_PAGE, { where: { slug: { is: slug } } }, { cache: "no-store" });
  if(!data){
    redirect('/404');
  }
  const slugMapping = JSON.parse(convertBASE64toJSON(data?.components))


  return (
    <div>
      <ObjReact objReact={{
        path: slug,
        component: [
          {
            component: "Navbar",
            props: {
              ...componentJson[0].props,
              active: mainPath
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
  )
}

export default page
