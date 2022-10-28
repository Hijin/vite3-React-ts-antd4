import { createContext } from 'react';
import UserStore from './userStore'
class RootStore {
  userStore;
  constructor() {
    this.userStore = new UserStore(this);
  }
}

const store = new RootStore();

export default createContext(store);
