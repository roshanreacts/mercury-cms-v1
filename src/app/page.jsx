import * as Components from './Components';
import ObjReact from './utilities/DynamicComponent';
import { generateCompoLib, generateComponentList } from './utilities/methods';
import componentJson from './utilities/ComponentData.json';
import store from '~/store';
import { GET_PAGE } from '~/utilis/queries';


const page = async ({ params }) => {

  const slugMapping = await store.getPageBySlug(GET_PAGE, {where: {slug :{is:"home"}}});
  console.log(slugMapping);
  
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
    </div>
  )
}

export default page
