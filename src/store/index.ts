import { createContext } from 'react'
import { makeAutoObservable } from 'mobx'

class RootStore {
  todoStore
  userStore
  constructor() {
    this.todoStore = new TodoStore(this)
    this.userStore = new UserStore(this)
  }
}
class TodoStore {
  rootStore
  a: any = ''
  constructor(rootStore: any) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }
  testPFun(value: any) {
    this.a = value
  }
}

class UserStore {
  rootStore
  testP: any = ''
  constructor(rootStore: any) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }
  testPFun(value: any) {
    this.testP = value
  }
}

const store = new RootStore()

export default createContext(store)
