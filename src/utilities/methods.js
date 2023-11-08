

export const generateCompoLib = (parentComponent, pageComponents) => {
    const compLib = {};
    pageComponents?.map((com) => {
        const cname = com.component;
        compLib[cname] = parentComponent[cname];
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