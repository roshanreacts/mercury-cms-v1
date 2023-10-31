import { types, flow } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import { makeFetchCall } from "~/app/actions";
import User from "./models/User";
import Page from "./models/Page";
import Website from "./models/Website";

const RootStore = types
  .model("Root", {
    users: types.array(User),
    pages: types.array(Page),
    websites: types.array(Website),
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
      self.pages = self.pages.map((pg) => (pg.id === data.id ? data : pg));
    }),
  }));

const store = RootStore.create({
  users: [{ name: "Michel", id: "23" }, { name: "Mattia", id: "23" }],
  pages: [],
  websites: [],
});

connectReduxDevtools(require("remotedev"), store);

export default store;
