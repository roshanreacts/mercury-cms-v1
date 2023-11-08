import { ComponentType } from "./DynamicComponent";

export const generateCompoLib = (parentComponent, pageComponents) => {
    const compLib = {};
    pageComponents?.map((com) => {
        const cname = com.component;
        compLib[cname] = parentComponent[cname];

        // com.children && com.children.map((child:any) => {
        //     const cname = child.component;
        //     compLib[cname] = parentComponent[cname];

        //     child.children && child.children.map((child:any) => {
        //         const cname = child.component;
        //         compLib[cname] = parentComponent[cname];
        //     })
        // })
    })

    return compLib;
}


export const generateComponentList = (pageComponents) => {
    let componetsList = [];
    
    pageComponents?.map((com) => {
        let tempComp= {
            component: com.component,
            props: com.props,
            children: com.children? com.children : null
        }
        componetsList.push(tempComp);
    })
    
    return componetsList;
} 