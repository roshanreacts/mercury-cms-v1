import { types, flow } from "mobx-state-tree";
// import { connectReduxDevtools } from "mst-middlewares";
import { serverFetch } from "~/app/actions";
import User from "./models/User";
import Page from "./models/Page";
import Website from "./models/Website";

export const makeGraphqlQuery = async (...args) => {
  const data = await serverFetch(...args);
  if (data?.error) {
    throw data?.error;
  }
  return data;
};

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
      self.token = data.login.token;
      self.message = data.login.message;
      self.loggedInUser = {
        name: data.login.name,
        email: data.login.email,
        role: data.login.role,
        id: data.login.id,
      };
    }),
    getLoggedInUser: flow(function* (query, variables, options) {
      let data = yield makeGraphqlQuery(query, variables, options);
      self.loggedInUser = data?.getUser;
    }),
    getAllPages: flow(function* (query, variables, options) {
      const data = yield makeGraphqlQuery(query, variables, options);
      self.pages = data?.allPages?.docs;
    }),
    getAllWebsites: flow(function* (query, variables, options) {
      const data = yield makeGraphqlQuery(query, variables, options); 
      self.websites = data?.allWebsites?.docs;
    }),
    getWebsiteWithId: flow(function* (query, variables, options, id) {
      let data = yield makeGraphqlQuery(query, variables, options);
      const index = self.websites.findIndex((web) => web.id === id);
      self.websites[index] = data?.getWebsite;
    }),
    updateWebsiteById: flow(function* (query, variables, options, id) {
      let data = yield makeGraphqlQuery(query, variables, options);
      const index = self.websites.findIndex((web) => web.id === id)
      self.websites[index] = data?.updateWebsite;
    }),
    getPageWithId: flow(function* (query, variables, options, id) {
      let data = yield makeGraphqlQuery(query, variables, options);
      const index = self.pages.findIndex((page) => page.id === id);
      self.pages[index] = data?.getPage;
    }),
    updatePageById: flow(function* (query, variables, options, id) {
      let data = yield makeGraphqlQuery(query, variables, options);
      const index = self.pages.findIndex((page) => page.id === id);
      self.pages[index] = data?.updatePage;
    }),
  }));

const store = RootStore.create({
  users: [],
  pages: [],
  websites: [],
});

// connectReduxDevtools(require("remotedev"), store);

export default store;
