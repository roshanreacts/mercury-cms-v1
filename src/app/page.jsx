import React from 'react'
import * as Components from './Components';
import ObjReact from './utilities/DynamicComponent';
import jsonData from './utilities/vithiApp.json'
import { generateCompoLib, generateComponentList } from './utilities/methods';
import componentJson from './utilities/ComponentData.json';


const page = ({ params }) => {

  const slugMapping = jsonData.filter((subData)=> subData.slug === `home`)[0];
  
  return (
    <div>
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
