import { types } from 'mobx-state-tree';
import Page from './Page';
import User from './User'

const Website = types
  .model("Website", {
    id: types.identifier,
    slug: types.maybeNull(types.string),
    name: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    domain: types.maybeNull(types.string),
    status: types.maybeNull(types.enumeration(["Draft", "Published"])),
    author: types.maybeNull(types.late(() => User)),
    pages: types.maybeNull(types.array(Page)),
  })
  .actions((self) => ({}));

export default Website;

