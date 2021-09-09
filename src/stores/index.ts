import React from "react";
import TestStore from './TestStore';
import UserStore from './UserStore';

export const storesContext = React.createContext({
  testStore: TestStore,
  userStore: UserStore
})