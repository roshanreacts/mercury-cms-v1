import React from 'react'
import * as Components from '../Components';
import ObjReact from '../utilities/DynamicComponent';
import { generateCompoLib, generateComponentList } from '../utilities/methods';
import componentJson from '../utilities/ComponentData.json';
import store from '~/store';
import { GET_PAGE } from '~/utilis/queries';
import { convertBASE64toJSON } from '~/utilis/utilMethods';


const page = async ({ params }) => {

  const mainPath = params.mainPath
  const data = await store.getPageBySlug(GET_PAGE, { where: { slug: { is: mainPath } } }, {cache: "no-store"});
  const slugMapping = JSON.parse(convertBASE64toJSON(data?.components));

  return (
    <div>
      <ObjReact objReact={{
        path: `${mainPath}`,
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
