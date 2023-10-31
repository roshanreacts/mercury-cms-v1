import { types, flow } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import { makeFetchCall } from "~/app/actions";
import {Page, User, Website} from "./mobxModels";


const RootStore = types
  .model("Root", {
    users: types.array(User),
    pages: types.array(Page),
    websites:types.array(Website)
  })
  .actions((self) => ({
    getAllPages: flow(function* () {
      const data = yield makeFetchCall();
      console.log("::data", data);
      self.pages = data;
    }),
    getPage: flow(function* (pageId) {
      const data = yield makeFetchCall();
      console.log("::data", data);
      self.pages.map((pg) => {
        if (pg.id === data.id) {
          return data;
        } else {
          return pg;
        }
      });
    }),
  }));

const store = RootStore.create({
  users: [{ name: "Michel" }, { name: "Mattia" }],
  pages: [ ],
  websites: []
  // pages: { data: [{ id: 0, title: "Home", userId: 0, body: "Home Page", loading: false, error: undefined }], loading: false, error: undefined },
});

// const store = asReduxStore(todos)
connectReduxDevtools(require("remotedev"), store);

export default store;
