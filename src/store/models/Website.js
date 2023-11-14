import { flow, types } from 'mobx-state-tree';
import Page from './Page';
import User from './User'
import { makeGraphqlQuery } from '..';

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
    updatedOn: types.maybeNull(types.string),
    createdOn: types.maybeNull(types.string),
  })
  .actions((self) => ({
    getWebsite: flow(function* (query, variables, options) {
      let data = yield makeGraphqlQuery(query, variables, options);
      self = data?.getWebsite;
    }),
  }));

export default Website;

