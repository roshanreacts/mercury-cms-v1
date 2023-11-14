// User.js
import { types } from 'mobx-state-tree';
import Website from './Website';

const User = types
  .model('User', {
    id: types.identifier,
    name: types.maybeNull(types.string),
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    role: types.maybeNull(types.string),
    websites: types.maybeNull(types.array(Website)),
    updatedOn: types.maybeNull(types.Date),
    createdOn: types.maybeNull(types.Date),
  })
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },
  }));

export default User;

