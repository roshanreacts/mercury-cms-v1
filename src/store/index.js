import { types, flow } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import { makeFetchCall, makeGraphqlQuery } from "~/app/actions";
import User from "./models/User";
import Page from "./models/Page";
import Website from "./models/Website";

const RootStore = types
  .model("Root", {
    token: types.maybeNull(types.string),
    loggedInUser: types.maybeNull(User),
    message: types.maybeNull(types.string),
    users: types.array(User),
    pages: types.array(Page),
    websites: types.array(Website),
  })
  .actions((self) => ({
    login: flow(function* (query, variables, options) {
      let data = yield makeGraphqlQuery(query, variables, options);
      console.log("::data", data);
      self.token = data.login.token 
      self.message = data.login.message
      self.loggedInUser = {
        name: data.login.name,
        email: data.login.email,
        role: data.login.role,
        id: data.login.id
      }
    }),
    getLoggedInUser: flow(function* (query, variables, options) {
      let data = yield makeGraphqlQuery(query, variables, options);
      console.log("::data", data);
      self.loggedInUser = data?.getUser
    }),
    getAllPages: flow(function* (query, variables, options) {
      const data = yield makeGraphqlQuery(query, variables, options);
      console.log("::data", data);
      self.pages = data?.allPages?.docs
    }),
  }));

const store = RootStore.create({
  users: [{ id:"4", name:"ewfr" }, { id:"23" }],
  pages: [ ],
  websites: []
});

connectReduxDevtools(require("remotedev"), store);

export default store;
