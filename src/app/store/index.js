import { types, flow } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import { makeFetchCall } from "~/app/actions";

const Page = types
  .model("Page", {
    id: types.identifierNumber,
    title: types.string,
    userId: types.number,
    body: types.string,
  })
  .actions((self) => ({
    updateTitle(newTitle) {
      self.title = newTitle;
    },
  }));

const Todo = types
  .model({
    title: types.string,
    done: false,
  })
  .actions((self) => ({
    toggle() {
      self.done = !self.done;
    },
  }));

const User = types
  .model({
    name: types.string,
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },
  }));

const RootStore = types
  .model("Root", {
    users: types.array(User),
    todos: types.array(Todo),
    pages: types.array(Page),
  })
  .actions((self) => ({
    getAllPages: flow(function* () {
      const data = yield makeFetchCall();
      console.log("::data",data);
      self.pages = data;
    }),
  }));

const store = RootStore.create({
  users: [{ name: "Michel" }, { name: "Mattia" }],
  todos: [{ title: "Eat", done: false }],
  pages: [{ id: 0, title: "Home", userId: 0, body: "Home Page" }],
});

// const store = asReduxStore(todos)
connectReduxDevtools(require("remotedev"), store);

export default store;
