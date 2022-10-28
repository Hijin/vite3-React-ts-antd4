import { makeAutoObservable } from 'mobx';
class UserStore {
  rootStore;
  permission: string[] = []
  constructor(rootStore: any) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
  setPermission(value: string[]) {
    this.permission = value;
  }
}

export default UserStore