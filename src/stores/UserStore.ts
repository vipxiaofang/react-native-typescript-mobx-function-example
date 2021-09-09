import {makeAutoObservable} from "mobx"

class UserStore {
  name: string = 'vipxiaofang'

  constructor() {
    makeAutoObservable(this);
  }
}

export default new UserStore();