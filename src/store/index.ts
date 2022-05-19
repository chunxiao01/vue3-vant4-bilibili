import { createStore } from "vuex";

import type { IrootState } from "./types";

import { HomeModule } from "./home/homeModule";

export default createStore<IrootState>({
  state: {
    data: ""
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    HomeModule
  }
});
