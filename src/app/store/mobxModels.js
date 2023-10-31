const { types } = require("mobx-state-tree");

export const User = types
  .model("User", {
    name: types.string | undefined,
    email: types.string | undefined,
    password: types.string | undefined,
    role: types.enumeration("Role", ["USER", "ADMIN"]) | undefined,
    websites: types.array(types.reference(Website)) | undefined,
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },
  }));

export const Website = types
  .model("Website", {
    id: types.identifierNumber,
    slug: types.string | undefined,
    name: types.string | undefined,
    description: types.string | undefined,
    domain: types.string | undefined,
    status: types.enumeration("Status", ["Draft", "Published"])|undefined,
    author: types.reference(Page)|undefined,
    pages: types.array(types.reference(Page))|undefined,
  })
  .actions((self) => ({}));

export var Page = types
  .model("Page", {
    id: types.identifierNumber,
    title: types.string | undefined,
    slug: types.string | undefined,
    path: types.string | undefined,
    metaDescription: types.string | undefined,
    status: types.reference(Website) | undefined,
    website: types.string | undefined,
    author: types.reference(User) | undefined,
    components: types.string | undefined,
    version: types.number | undefined,
  })
  .actions((self) => ({
    updateTitle(newTitle) {
      self.title = newTitle;
    },
  }));
