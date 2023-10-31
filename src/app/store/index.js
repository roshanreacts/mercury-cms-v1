import { types, flow } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import { makeFetchCall } from "~/app/actions";
import User from "./models/User";
import Page from "./models/Page";
import Website from "./models/Website";

const RootStore = types
  .model("Root", {
    token: types.maybeNull(types.string),
    loggedInUser: types.maybeNull(User),
    users: types.array(User),
    pages: types.array(Page),
    websites: types.array(Website),
  })
  .actions((self) => ({
    login: flow(function* (query, variables, options) {
      const data = yield makeGraphqlQuery(query, variables, options);
      console.log("::data", data);
      self.loggedInUser = data.user;
      self.token = data.token 
    }),
    getAllPages: flow(function* () {
      const data = yield makeFetchCall();
      console.log("::data", data);
      self.pages = data;
    }),
    getPage: flow(function* (pageId) {
      const data = yield makeFetchCall();
      console.log("::data", data);
      self.pages = self.pages.map((pg) => (pg.id === data.id ? data : pg));
    }),
  }));

const store = RootStore.create({
  users: [{ id:"4", name:"ewfr" }, { id:"23" }],
  pages: [ ],
  websites: []
  // pages: { data: [{ id: 0, title: "Home", userId: 0, body: "Home Page", loading: false, error: undefined }], loading: false, error: undefined },
});

connectReduxDevtools(require("remotedev"), store);

export default store;
