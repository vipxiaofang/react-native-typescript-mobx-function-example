import {makeAutoObservable} from "mobx"

class TestStore {
  count: number = 10;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }


  decrement() {
    this.count--
  }
}

export default new TestStore();