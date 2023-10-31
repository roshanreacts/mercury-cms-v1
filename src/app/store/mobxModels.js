const { types } = require("mobx-state-tree");

const Page = types
    .model("Page", {
        id: types.identifierNumber,
        title: types.string | undefined,
        userId: types.number,
        body: types.string,
        loading: types.boolean,
        error: types.union | undefined
    })
    .actions((self) => ({
        updateTitle(newTitle) {
            self.title = newTitle;
        },
    }));

export default Page;