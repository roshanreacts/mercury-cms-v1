"use client"
import React from 'react'
import * as Components from '../Components';
import ObjReact from '../utilities/DynamicComponent';
import jsonData from '../utilities/vithiApp.json'
import { generateCompoLib, generateComponentList } from '../utilities/methods';
import componentJson from '../utilities/ComponentData.json';
import {useLazyQuery} from '~/container/hooks'
import store from '~/store';
import { GET_PAGE } from '~/utilis/queries';


const page = async ({ params }) => {

  const slugMapping = await store.getPageBySlug(GET_PAGE, {where: {slug :{is:"home"}}});
  console.log(slugMapping);
  

  const mainPath = params.mainPath;

  const slugMapping = jsonData.filter((subData)=> subData.slug === `${mainPath}`)[0];
  

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
          ...generateComponentList(slugMapping?.Components),
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
          ...generateCompoLib(Components, slugMapping?.Components),
          "Navbar": Components.Navbar,
          "Footer": Components.Footer,
          "MoveToUp": Components.MoveToUp
        }
      }} />
    </div>
  )
}

export default page
