import { makeAutoObservable } from 'mobx';
import { makePersistable } from "mobx-persist-store";  // 防止刷新后缓存丢失
class UserStore {
  rootStore;
  permission: string[] = [];  // 用户权限信息
  userInfo: object = {};  // 用户信息
  constructor(rootStore: any) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    makePersistable(this, {
      name: 'UserStore', // 保存的name，用于在storage中的名称标识，只要不和storage中其他名称重复就可以
      properties: ["permission", 'userInfo'], // 要保存的字段，这些字段会被保存在name对应的storage中
      storage: window.sessionStorage, // 保存的位置localStorage/sessionstorage
    })
  }
  setPermission(value: string[]) {
    this.permission = value;
  }
  setUserInfo(value: object) {
    this.userInfo = {
      ...this.userInfo,
      ...value
    };
  }
  clearUserStore() {
    this.permission = []
    this.userInfo = {}
  }
}

export default UserStore