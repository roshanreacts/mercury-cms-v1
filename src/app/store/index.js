import { types, flow } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import { makeFetchCall } from "~/app/actions";

const Page = types
  .model("Page", {
    id: types.identifierNumber,
    title: types.string,
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
    pages: types.model({
      data: types.array(Page),
      loading: types.boolean,
      error: types.union | undefined
    }),
  })
  .actions((self) => ({
    getAllPages: flow(function* () {
      const data = yield makeFetchCall();
      console.log("::data", data);
      self.pages = data;
    }),
    getPage: flow(function* (pageId){
      const data = yield makeFetchCall();
      console.log("::data", data);
      self.pages.map((pg) => {
        if(pg.id===data.id){
          return data;
        }
        else{
          return pg;
        }
      })
    })
  }));

const store = RootStore.create({
  users: [{ name: "Michel" }, { name: "Mattia" }],
  todos: [{ title: "Eat", done: false }],
  pages: {loading:false}
  // pages: { data: [{ id: 0, title: "Home", userId: 0, body: "Home Page", loading: false, error: undefined }], loading: false, error: undefined },
});

// const store = asReduxStore(todos)
connectReduxDevtools(require("remotedev"), store);

export default store;
