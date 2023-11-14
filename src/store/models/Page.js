import { types } from 'mobx-state-tree';
import User from './User'; // Import User as named export
import Website from './Website';

const Page = types
  .model("Page", {
    id: types.identifier,
    title: types.maybeNull(types.string),
    slug: types.maybeNull(types.string),
    path: types.maybeNull(types.string),
    metaDescription: types.maybeNull(types.string),
    status: types.maybeNull(types.enumeration(["Active", "Draft"])),
    website: types.maybeNull(types.late(() => Website)), // Use types.late for circular dependencies
    author: types.maybeNull(types.late(() => User)), // Use types.late for circular dependencies
    components: types.maybeNull(types.string),
    metaTitle: types.maybeNull(types.string),
    version: types.maybeNull(types.string),
  })
  .actions((self) => ({
    updateTitle(newTitle) {
      self.title = newTitle;
    },
  }));

export default Page;
